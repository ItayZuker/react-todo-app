const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/Users.model.js');


router.delete('/:id', async (req, res) => {
    const docs = await UsersModel
        .deleteOne({_id: ObjectID.createFromHexString(req.params.id)})
        .exec();
        res.send(docs);
})

router.post('/', async (req, res) => {
    const newUser = await UsersModel(req.body);
        newUser.save();
        res.send(newUser);
});

router.get('/', async (req, res) => {
    const docs = await UsersModel
        .find({})
        .exec()
        res.send(docs)
});


module.exports = router;

