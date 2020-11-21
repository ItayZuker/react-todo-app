const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose"); 
const TodosModel = require('../models/Todos.model.js');



router.put("/:id/not-complited", async (req, res) => {
    const docs = await TodosModel
        .updateOne({
            _id: req.params.id},
        {
            complited: false,
        })
        .exec();
        res.send(docs);
});

router.put("/:id/complited", async (req, res) => {
    const docs = await TodosModel
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
    const docs = await TodosModel
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
    const docs = await TodosModel
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
    const docs = await TodosModel
        .deleteMany({
            complited: true
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