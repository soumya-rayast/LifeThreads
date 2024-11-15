const Blog = require('../model/Blog.Model')
const User = require("../model/User.model.js")

//function for create blog
const createBlog = async (req, res) => {
    try {
        // Extracting authorId,from req.id and blog details from req.body
        const authorId = req.id;
        const { title, content, blogImage, tags, category } = req.body;
        const newBlog = new Blog({
            title,
            content,
            blogImage,
            tags,
            category,
            author: authorId,
            createdAt: new Date()
        })
        // saved the blog to the database
        const savedBlog = await newBlog.save();
        res.status(201).json({ message: "Blog Created Successfully", blog: savedBlog });
    } catch (error) {
        console.error(error)
    }

}
// function for get blogs
const getBlogs = async (req, res) => {
    try {
        const authorId = req.id;
        const blog = await Blog.find({ authorId });
        if (!blog || blog.length === 0) {
            return res.status(404).json({ message: "No blogs found", success: false })
        }

        return res.status(200).json({ blog, success: true })
    } catch (error) {
        console.error(error);
        res.status(500).jsn({ message: "Error fetching blogs" })
    }
}
//function  get blog by id
const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate('author', 'name email');
        if (!blog) {
            return res.status(404).json({
                message: "Blog Not Found", success: false
            })
        }
        return res.status(200).json({
            blog,
            success: true
        })
    } catch (error) {
        console.error(error),
            res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
}
// function for update blog by author
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, blogImage, tags, category } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            id, {
            title,
            content,
            blogImage,
            tags,
            category,
            updatedAt: new Date()
        }, { new: true }
        )
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog Not found" })
        }
        res.status(200).json({
            message: "Blog updated successfully", blog: updatedBlog
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating blog',
            error: error.message,
        });
    }
}
//function for delete blog
const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blo not found", success: false })
        }
        const { authorId } = blog;
        await User.findByIdAndUpdate(authorId, {
            $pull: { uploads: id }
        });
        // delete from the database
        await Blog.findByIdAndDelete(id);
        return res.status(200).json({ success: false, message: error.message })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message })
    }
}
//function for search blog
const searchBlog = async (req, res) => {
    const { search } = req.query;
    try {
        const blogs = await Blog.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { content: { $regex: search, $options: "i" } },
                { tags: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } }
            ]
        });
        if (blogs.length === 0) {
            return res.status(404).json({ success: false, message: "No Blogs Found" })
        }
        return res.status(200).json({ success: true, data: blogs })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}
// function for add to favourites   
const addToFavourites = async (req, res) => {
    const { blogId } = req.params;
    const userId = req.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.favourites.includes(blogId)) {
            return res.status(400).json({ success: false, message: "Blog already in favourites" })
        }
        user.favourites.push(blogId);
        await user.save();
        return res.status(200).json({ success: true, message: "Blog added to favourites" });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}
// function for remove Blog from favourites  
const removefromfavourites = async (req, res) => {
    const userId = req.id;
    const { blogId } = req.params;
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { new: true }
        )
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}
// function for get favourites 
const getFavourites = async (req, res) => {
    const userId = req.id;
    try {
        const user = await User.findById(userId).populate('favorites');
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        const { favourites } = user;
        if (!favourites || favourites.length === 0) {
            return res.status({ success: false, message: "No favourites added" });
        }
        return res.status(200).json({ success: true, data: favourites })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    searchBlog,
    addToFavourites,
    removefromfavourites,
    getFavourites
}