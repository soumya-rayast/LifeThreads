const Category = require('../model/Category.model');

// function for Create a new category
const createCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ success: false, message: "Category already exists" });
        }

        // Create new category
        const newCategory = new Category({ name, description });
        const savedCategory = await newCategory.save();
        return res.status(201).json({ success: true, message: 'Category created successfully', category: savedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// function Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(404).json({ success: false, message: "No categories found" });
        }
        return res.status(200).json({ success: true, categories });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

//function for Get category by ID
const getCategoryById = async (req, res) => {
    const { id } = req.params;
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

// function for Update a category
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id, 
            { name, description, updatedAt: new Date() }, 
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

//function Delete a category
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        // Deleting the category
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
