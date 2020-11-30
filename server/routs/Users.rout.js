const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/Users.model.js');


router.delete('/delete-user/:userId', async (req, res) => {                                 //////  ---> Delete this user
    await UsersModel                                                                            //       -
        .deleteOne({_id: ObjectID.createFromHexString(req.params.userId)}, (err, docs) => {     //       Activeted at
            if(err) {                                                                           //       MenuItemDeleteUser component
                console.log(err);                                                               //       
            } else {                                                                            //
                res.json(docs)                                                                  //
            };                                                                                  //
        });                                                                                     //
});                                                                                         //////


router.post('/create-user', async (req, res) => {                                           //////  ---> Create new user
    await UsersModel                                                                            //       -
        .create({                                                                               //       Activeted at NewUser component
            name: req.body.name,                                                                //
        }, (err, docs) => {                                                                     //
            if(err) {                                                                           //
                console.log(err);                                                               //
                res.status(500).send();                                                         //
            } else if(!docs) {                                                                  //
                res.status(404);                                                                //
            } else {                                                                            //
                res.json(docs);                                                                 //
            };                                                                                  //
        });                                                                                     //
});                                                                                         //////


router.get('/get-user/:userId', async (req, res) => {                                       //////  ---> Send user object
    await UsersModel                                                                            //       -
        .findOne({                                                                              //       Activeted at TodoPage component
            _id: ObjectID.createFromHexString(req.params.userId),                               //
        }, (err, docs) => {                                                                     //
            if(err) {                                                                           //
                console.log(err);                                                               //
                res.status(500).send();                                                         //
            } else if(!docs) {                                                                  //
                res.status(404);                                                                //
            } else {                                                                            //
                res.json(docs);                                                                 //
            };                                                                                  //
        });                                                                                     //
});                                                                                         //////


router.get('/', async (req, res) => {                                                       //////  ---> Send all users
    await UsersModel                                                                            //       -
        .find({}, (err, docs) => {                                                              //       Activeted at UsersContainer component
            if(err) {                                                                           //
                console.log(err);                                                               //
                res.status(500).send();                                                         //
            } else if(!docs) {                                                                  //
                res.status(404).send();                                                         //
            } else {                                                                            //
                res.json(docs);                                                                 //
            };                                                                                  //
        });                                                                                     //
});                                                                                         //////



module.exports = router;

