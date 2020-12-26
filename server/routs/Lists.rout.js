const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const ListsModel = require('../models/lists.model.js');

router.get('/*', express.static(path.join(__dirname, '../../client/build')))

router.put('/update-list-name/:listId', async (req, res) => {
    await ListsModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.listId),
        },
        {
            listName: req.body.listName,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.put('/update-list/:listId', async (req, res) => {
    await ListsModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.listId),
        },
        {
            todos: req.body.todos,
            completed: req.body.completed,
            allCompleted: req.body.allCompleted,
            active: req.body.active,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.delete('/delete-user/:userId', async (req, res) => {
    await ListsModel
        .deleteMany({
            userId: ObjectID.createFromHexString(req.params.userId)
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.delete('/delete-list/:listId', async (req, res) => {
    await ListsModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.listId)
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.post('/create-list/:userId', async (req, res) => {
    await ListsModel
        .create({
            userId: req.params.userId,
            listName: req.body.listName,
            todos: 0,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.get('/get-user-lists/:userId', async (req, res) => {
    await ListsModel
        .find({
            userId: req.params.userId,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


module.exports = router