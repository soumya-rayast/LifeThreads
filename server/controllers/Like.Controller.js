const Like = require("../model/Like.Model.js")

// function fr addLike 
const addLike = async (req, res) => {
    const userId = req.id;
    const { blogId } = req.params;
    try {
        const existingLike = await Like.findOne({ user: userId, blog: blogId });
        if (existingLike) {
            return res.status(200).json({ success: true, message: "Already liked this blog" });
        }
        // create new Like
        const newLike = new Like({ user: userId, blog: blogId });
        await newLike.save();
        return res.status(202).json({ success: true, message: "Blog liked successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}
// function for remove likes
const removeLike = async (req, res) => {
    const userId = req.id;
    const { blogId } = req.params;
    try {
        const like = await Like.findOneAndDelete({ user: userId, blog: blogId });
        if (!like) {
            return res.status(404).json({ success: false, message: "Like not found" })
        }
        return res.status(200).json({ success: true, message: "Liked removed successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}
// function for getting all likes 
const getLikesForBlog = async (req, res) => {
    const { blogId } = req.params;
    try {
        const likes = await Like.findByIdAndDelete({ blog: blogId }).populate('user', 'name email');
        if (!likes.length) {
            return res.status(404).json({ success: false, message: "No likes found for this blog" });
        }
        return res.status(200).json({ success: true, data: likes })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}
//  function for count likes 
const countLikesBlog = async (req, res) => {
    const { blogId } = req.params;
    try {
        const count = await Like.countDocuments({ blog: blogId });
        if (!blogId) {
            return res.status(400).json({ success: false, message: "Invalid blog ID" });
        }
        return res.status(200).json({ success: true, count })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    addLike,
    removeLike,
    getLikesForBlog,
    countLikesBlog
}