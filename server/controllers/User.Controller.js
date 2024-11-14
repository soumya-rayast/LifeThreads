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
        await user.create({
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
        if (!email, !password) {
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
        return res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).
            json({ message: 'Welcome Author', user, success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

// for logout
const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).
            json({ message: "Logout Successfully", success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}
// for update profile
const updateProfile = async (req, res) => {
    try {
        const { name, email, phoneNumber, bio, profilePhoto, socialLinks } = req.body;
        const userId = req.user._id;
        if (!name || !email || !phoneNumber) {
            return res.status(400).json({ message: "Name,email and phone number are required ", success: false })
        }
        // Update user profile in the database
        const updateUser = await User.findByIdAndUpdate(
            userId, {
            name,
            email,
            phoneNumber,
            "profile.bio": bio,
            "profile.profilePhoto": profilePhoto,
            "profile.socialLinks": socialLinks
        }, { new: true }
        )
        if (!updateUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        return res.status(200).json({ message: "internal Server Error", success: false })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}


module.exports = { signUp, login, logout, updateProfile }