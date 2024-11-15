const Comment = require('../model/Comment.model.js')

// function for new comment 
const addComment = async (req, res) => {
    const userId = req.id;
    const { blogId } = req.params;
    const { content } = req.body;
    try {
        const newComment = new Comment({ content, user: userId, blog: blogId });
        const savedComment = await newComment.save();
        return res.status(201).json({ success: true, message: 'Comment added successfully', comment: savedComment })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

//function for remove comment 
const removeComment = async (req, res) => {
    const userId = req.id;
    const { commentId } = req.params;
    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" })
        }
        if (comment.user.toString() !== userId.toString()) {
            return res.status(403).json({ success: false, message: "Unauthorized to delete this comment" })
        }
        await Comment.findByIdAndDelete(commentId);
        return res.status(200).json({ success: true, message: "Comment removed successfully" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }

}

// function for get all comments 
const getCommentsForBlog = async (req, res) => {
    const { blogId } = req.params;
    try {
        const comments = await Comment.find({ blog: blogId })
            .populate("user", " name email")
            .sort({ createdAt: -1 })
        return res.status(200).json({ success: true, comments })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

// function for comment counts 
const countCommentsBlog = async (req, res) => {
    const { blogId } = req.params;
    try {
        const count = await Comment.countDocuments({ blog: blogId });
        return res.status(200).json({ success: true, count })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    addComment,
    removeComment,
    getCommentsForBlog,
    countCommentsBlog,
};