const Comment = require('../model/Comment.model.js')

const addComment = async (req, res) => {
    const userId = req.id;
    const { blogId } = req.params;
    const { content } = req.body;

    // Input validation for content
    if (!content || content.trim().length < 3) {
        return res.status(400).json({ success: false, message: "Content is too short" });
    }

    try {
        // Check if blog exists before adding comment
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        const newComment = new Comment({ content, user: userId, blog: blogId });
        const savedComment = await newComment.save();
        return res.status(201).json({ success: true, message: 'Comment added successfully', comment: savedComment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

const removeComment = async (req, res) => {
    const userId = req.id;
    const { commentId } = req.params;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }
        if (comment.user.toString() !== userId.toString()) {
            return res.status(403).json({ success: false, message: "Unauthorized to delete this comment" });
        }
        await Comment.findByIdAndDelete(commentId);
        return res.status(200).json({ success: true, message: "Comment removed successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

const getCommentsForBlog = async (req, res) => {
    const { blogId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        const comments = await Comment.find({ blog: blogId })
            .populate("user", "name email")
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        if (!comments.length) {
            return res.status(404).json({ success: false, message: "No comments found for this blog" });
        }

        return res.status(200).json({ success: true, comments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

const countCommentsBlog = async (req, res) => {
    const { blogId } = req.params;

    try {
        const count = await Comment.countDocuments({ blog: blogId });
        return res.status(200).json({ success: true, count });
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
