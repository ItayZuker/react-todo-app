const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose"); 
const TodosModel = require('../models/Todos.model.js');



router.put("/:id", async (req, res) => {
    const docs = await TodosModel
        .updateOne({
            _id: req.params.id},
        {
            body: req.body.body,
            completed: req.body.completed,
        })
        .exec();
        res.send(docs);
});

router.put("/", async (req, res) => {
    const docs = await TodosModel
        .updateMany({
            completed: !req.body.completed,
        },
        {
            completed: req.body.completed,
        })
        .exec();
        res.send(docs);
});

router.delete('/user-todos/:id', async (req, res) => {
    const docs = await TodosModel
        .deleteMany({
            userId: ObjectID.createFromHexString(req.params.id),
        })
        .exec();
        res.send(docs);
})

router.delete('/clear-completed', async (req, res) => {
    const docs = await TodosModel
        .deleteMany({
            completed: true
        })
        .exec();
        res.send(docs);
});

router.delete('/:id', async (req, res) => {
    const docs = await TodosModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.id)
        })
        .exec();
        res.send(docs);
});

router.post('/', async (req, res) => {
    const newTodo = await TodosModel(req.body);
    newTodo.save();
    res.send(newTodo);
});

router.get("/:id", async (req, res) => {
    const docs = await TodosModel
        .find({userId: req.params.id})
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