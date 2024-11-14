const Blog = require('../model/Blog.Model')


// create blog
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
        }),
        // saved the blog to the database
        const savedBlog = await newBlog.save();
        res.status(201).json({ message: "Blog Created Successfully", blog: savedBlog });
    } catch (error) {
        console.error(error)
    }

}

// get blogs
const getBlogs = async (req, res) => {
    try {
        const authorId = req.id;
        const blog = await Blog.find({ authorId });
        if (!blog || getBlogs.length === 0) {
            return res.status(404).json({ message: "No blogs found", success: false })
        }

        return res.status(200).json({ blog, success: true })
    } catch (error) {
        console.error(error);
        res.status(500).jsn({ message: "Error fetching blogs" })
    }
}

// get blog by id
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

// for delete blog