const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose'); 
const TodosModel = require('../models/Todos.model.js');



router.put('/save-update/:todoId', async (req, res) => {
    await TodosModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.todoId),
        },
        {
            body: req.body.body,
            completed: req.body.completed,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                } else {
                    res.json(docs)
                }
            }
        })
})


router.put("/todo-true/:todoId", async (req, res) => {
    await TodosModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.todoId)},
        {
            completed: true,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.put("/todo-false/:todoId", async (req, res) => {
    await TodosModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.todoId)},
        {
            completed: false,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})

router.put('/all-todos-completed-true/:listId', async (req, res) => {
    await TodosModel
        .updateMany({
            listId: req.params.listId,
            completed: false,
        },
        {
            completed: true,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.put('/all-todos-completed-false/:listId', async (req, res) => {
    await TodosModel
        .updateMany({
            listId: req.params.listId,
            completed: true,
        },
        {
            completed: false,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.delete('/delete-user/:userId', async (req, res) => {
    await TodosModel
        .deleteMany({
            userId: ObjectID.createFromHexString(req.params.userId),
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.delete('/delete-list/:listId', async (req, res) => {
    await TodosModel
        .deleteMany({
            listId: req.params.listId,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.delete('/delete-todo/:todoId', async (req, res) => {
    await TodosModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.todoId)
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.post('/new-todo', async (req, res) => {
    await TodosModel
        .create({
            userId: req.body.userId,
            listId: req.body.listId,
            body: req.body.body,
            completed: req.body.completed,
            created: req.body.created,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


router.get("/get-user-todos/:userId", async (req, res) => {
    await TodosModel
        .find({
            userId: req.params.userId,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else {
                if(!docs) {
                    res.status(404).send()
                }
                res.json(docs)
            }
        })
})


module.exports = router