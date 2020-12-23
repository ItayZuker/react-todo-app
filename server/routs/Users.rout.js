const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/Users.model.js');


router.delete('/delete-user/:userId', async (req, res) => {
    await UsersModel
        .deleteOne({
            _id: ObjectID.createFromHexString(req.params.userId),
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


router.post('/create-user', async (req, res) => {
    await UsersModel
        .create({
            name: req.body.name,
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


router.get('/get-user/:userId', async (req, res) => {
    await UsersModel
        .findOne({
            _id: ObjectID.createFromHexString(req.params.userId),
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.status(404)
            } else {
                res.json(docs)
            }
        })
})


router.get('/get-users', async (req, res) => {
    await UsersModel
        .find({}, (err, docs) => {
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