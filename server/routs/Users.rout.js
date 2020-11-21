const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/Users.model.js');


router.get('/', async (req, res) => {
    const docs = await UsersModel
        .find({})
        .exec()
        res.send(docs)
});


module.exports = router;

