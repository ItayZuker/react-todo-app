const { response } = require("express");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose"); 
const TodoModel = require('../models/Todo.models.js');



router.put("/:id/not-complited", async (req, res) => {
    const docs = await TodoModel
        .updateOne({
            _id: req.params.id},
        {
            complited: false,
        })
        .exec();
        res.send(docs);
});

router.put("/:id/complited", async (req, res) => {
    const docs = await TodoModel
        .updateOne({
            _id: req.params.id,
        },
        {
            complited: true,
        })
        .exec();
        res.send(docs);
});

router.put("/complited", async (req, res) => {
    const docs = await TodoModel
        .updateMany({
            complited: false,
        },
        {
            complited: true,
        })
        .exec();
        res.send(docs);
});

router.put("/not-complited", async (req, res) => {
    const docs = await TodoModel
        .updateMany({
            complited: true,
        },
        {
            complited: false,
        })
        .exec();
        res.send(docs);
});

router.delete('/clear-complited', async (req, res) => {
    const docs = await TodoModel
        .deleteMany({
            complited: true
        })
        .exec();
        res.send(docs);
});

router.delete('/:id', async (req, res) => {
    const docs = await TodoModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.id)
        })
        .exec();
        res.send(docs);
});

router.post('/', async (req, res) => {
    const newTodo = await TodoModel(req.body);
    newTodo.save();
    res.send(newTodo);
});

router.get("/", async (req, res) => {
    const docs = await TodoModel
        .find({})
        .exec();
        res.json(docs);
});



module.exports = router;