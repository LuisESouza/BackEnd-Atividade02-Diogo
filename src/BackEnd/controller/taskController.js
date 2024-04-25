const express = require("express");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { Task, Category } = require("../model/task");
const cors = require('cors');

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}banco`);
    const app = express();

    const corsOptions = {
        origin: 'http://127.0.0.1:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };
    app.use(cors(corsOptions));
    app.use(express.json());

    app.get("/tasks", async (req, res) => {
        const tasks = await Task.find();
        res.json(tasks);
    });

    app.get("/category", async(req, res)=>{
        const category = await Category.find();
        res.json(category);
    })

    app.get("/", async(req, res)=>{
        const category = await Category.find();
        const tasks = await Task.find();
        res.json({category, tasks});
    })

    app.post("/tasks", async (req, res) => {
        console.log(req.body);
        const {
            nome,
            description,
            taskPriority,
            categoryTask,
            taskReady
        } = req.body;

        const newTask = new Task({
            nome: nome,
            description: description,
            taskPriority: taskPriority,
            categoryTask: categoryTask,
            taskReady: taskReady
        });
        await newTask.save();
        console.log("Salvando Task");
        res.send(newTask);
    });


    app.post("/category", async (req, res) =>{
        console.log(req.body);
        const{
            categoryTask,
            color
        } = req.body;

        const newCategory = new Category({
            categoryTask: categoryTask,
            color: color,
        });
        await newCategory.save();
        console.log("Salvando Categoria");
        res.send(newCategory);
    });

    app.listen(3001, () => {
        console.log("http://localhost:3001");
    });
};

setup();