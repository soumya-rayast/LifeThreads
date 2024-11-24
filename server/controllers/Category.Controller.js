const Category = require('../model/Category.model');

// function for Create a new category
const createCategory = async (req, res) => {
    const { name, description } = req.body;

    // Validation for category name
    if (!name || name.trim().length < 3) {
        return res.status(400).json({ success: false, message: "Category name must be at least 3 characters long" });
    }

    try {
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ success: false, message: "Category already exists" });
        }

        const newCategory = new Category({ name, description });
        const savedCategory = await newCategory.save();
        return res.status(201).json({ success: true, message: 'Category created successfully', category: savedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getCategories = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const categories = await Category.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ name: 1 });

        if (categories.length === 0) {
            return res.status(404).json({ success: false, message: "No categories found" });
        }

        return res.status(200).json({ success: true, categories });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ success: false, message: "Invalid category ID" });
    }

    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        return res.status(200).json({ success: true, category });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        // Check if the category exists
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        // Check if the user is authorized to update this category
        if (category.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: "Unauthorized to update this category" });
        }

        // Update the category
        const updatedCategory = await Category.findByIdAndUpdate(id, { name, description, updatedAt: new Date() }, { new: true });
        return res.status(200).json({ success: true, message: "Category updated successfully", category: updatedCategory });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        // Check if category is in use
        const relatedBlog = await Blog.findOne({ category: id });
        if (relatedBlog) {
            return res.status(400).json({ success: false, message: "Category is in use and cannot be deleted" });
        }

        await Category.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};

