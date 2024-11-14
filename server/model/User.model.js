const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        bio: {
            type: String,
        },
        profilePhoto: {
            type: String,
            default: '',
        },
        socialLinks: {
            facebook: {
                type: String,
                default: '',
            },
            twitter: {
                type: String,
                default: '',
            },
            instagram: {
                type: String,
                default: '',
            },
            linkedin: {
                type: String,
                default: '',
            },
        },
    },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
