const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose"); 
const TodosModel = require('../models/Todos.model.js');



router.put("/:todoId", async (req, res) => {
    const docs = await TodosModel
        .updateOne({
            _id: req.params.todoId},
        {
            body: req.body.body,
            completed: req.body.completed,
        })
        .exec();
        res.send(docs);
});

router.put("/check-all/:userId", async (req, res) => {
    const docs = await TodosModel
        .updateMany({
            userId: ObjectID.createFromHexString(req.params.userId),
            completed: !req.body.completed,
        },
        {
            completed: req.body.completed,
        })
        .exec();
        res.send(docs);
});

router.delete('/clear-user-todos/:userId', async (req, res) => {
    const docs = await TodosModel
        .deleteMany({
            userId: ObjectID.createFromHexString(req.params.userId),
        })
        .exec();
        res.send(docs);
});

router.delete('/clear-completed/:userId', async (req, res) => {
    const docs = await TodosModel
        .deleteMany({
            userId: ObjectID.createFromHexString(req.params.userId),
            completed: true,
        })
        .exec();
        res.send(docs);
});

router.delete('/:todoId', async (req, res) => {
    const docs = await TodosModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.todoId)
        })
        .exec();
        res.send(docs);
});

router.post('/', async (req, res) => {
    const newTodo = await TodosModel(req.body);
    newTodo.save();
    res.send(newTodo);
});

router.get("/:todoId", async (req, res) => {
    const docs = await TodosModel
        .find({userId: req.params.todoId})
        .exec();
        res.json(docs);
});

router.get("/", async (req, res) => {
    const docs = await TodosModel
        .find({})
        .exec();
        res.json(docs);
});



module.exports = router;