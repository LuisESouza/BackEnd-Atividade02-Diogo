const { Schema, model } = require("mongoose");

const schemaCategory = new Schema({
    categoryTask: String,
    color: String,
});

const schemaTask = new Schema({
    nome: String,
    description: String,
    taskPriority: Number,
    categoryTask: [schemaCategory],
    taskReady: Boolean,
});

const Task = model('Task', schemaTask);
const Category = model('Category', schemaCategory);

module.exports = {
    Task: Task,
    Category: Category
};