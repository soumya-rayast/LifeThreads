const User = require("../model/User.model.js")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');


// for Signup
const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the form", success: false })
        };
        const Email = await User.findOne({ email });
        if (Email) {
            return res.status(400).json({ message: "User already exist with this email", success: false })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(201).json({ message: 'Account created successfully', success: true })
    } catch (error) {
        console.error(error); return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

// for login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the form", success: false })
        }
        // email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials", success: false })
        }
        // password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid Credentials", success: false })
        }
        // generate token
        const tokenData = {
            userId: user._id
        };
        // Prepare user data for response
        const token = jwt.sign(tokenData, process.env.SECRET_Key, { expiresIn: "2d" });
        user = {
            _id: user._id,
            email: user.email,
            phoneNumber: user.phoneNumber,
            profile: user.profile
        }
        // Set token in cookie and respond
        return res.status(200).cookie('token', token, { maxAge: 2 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', }).
            json({ message: 'Welcome Author', user, success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

// for logout
const logout = async (req, res) => {
    try {
        return res.status(200).clearCookie("token").
            json({ message: "Logout Successfully", success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}
// for update profile
const updateProfile = async (req, res) => {
    try {
        const { name, email, phoneNumber, bio, socialLinks } = req.body;
        const userId = req.user._id;

        // Check if the required fields are provided
        if (!name || !email || !phoneNumber) {
            return res.status(400).json({ message: "Name, email, and phone number are required", success: false });
        }

        let profilePhotoUri;
        let profilePhotoUrl;

        // Check if a file is uploaded
        if (req.file) {
            const file = req.file;
            const fileUri = getDataUri(file);

            // Upload to Cloudinary
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

            // Get the uploaded image URL
            profilePhotoUrl = cloudResponse.secure_url;
        }

        // Create update object
        const updateFields = {
            name,
            email,
            phoneNumber,
            "profile.bio": bio,
            "profile.socialLinks": socialLinks
        };

        // Add profile photo URL if a new photo was uploaded
        if (profilePhotoUrl) {
            updateFields["profile.profilePhoto"] = profilePhotoUrl;
        }

        // Update user profile in the database
        const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        return res.status(200).json({ message: "Profile updated successfully", success: true, data: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};
module.exports = { signUp, login, logout, updateProfile }