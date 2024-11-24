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
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: true,
    },
    profile: {
        bio: {
            type: String,
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
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
