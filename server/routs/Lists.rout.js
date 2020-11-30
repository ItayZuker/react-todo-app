const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const ListsModel = require('../models/lists.model.js');


router.delete('/delete-user/:userId', async (req, res) => {         //////  ---> Delete all lists for this user        
    await ListsModel                                                    //       -
        .deleteMany({                                                   //       Activeted at MenuItemDeleteUser component
            userId: ObjectID.createFromHexString(req.params.userId)     //       
        }, (err, docs) => {                                             //
            if(err) {                                                   //
                console.log(err);                                       //
                res.status(500).send();                                 //
            } else if(!docs) {                                          //
                res.status(404).send();                                 //
            } else {                                                    //
                res.json(docs);                                         //
            };                                                          //
        });                                                             //
});                                                                 //////


router.post('/create-list/:userId', async (req, res) => {           //////  ---> Create new list for this user
    await ListsModel                                                    //       -
        .create({                                                       //       Activeted at NewUser component
            userId: req.params.userId,                                  //       when creating new user
        }, (err, docs) => {                                             //       or when edding new list at
            if(err) {                                                   //       (NOT YET EXIST)
                console.log(err);                                       //
                res.status(500).send();                                 //
            } else if(!docs) {                                          //
                res.status(404).send();                                 //
            } else {                                                    //
                res.json(docs);                                         //
            };                                                          //
        });                                                             //
});                                                                 //////


router.get('/get-lists/:userId', async (req, res) => {              //////  ---> This fetch send all the lists
    await ListsModel                                                    //       for this user
        .find({                                                         //       -
            userId: req.params.userId,                                  //       Activeted in TodosPage component
        }, (err, docs) => {                                             //       
            if(err) {                                                   //       
                console.log(err);                                       //
                res.status(500).send();                                 //       
            } else if(!docs) {                                          //
                res.status(404).send();                                 //
            } else {                                                    //
                res.json(docs);                                         //
            };                                                          //
        });                                                             //
});                                                                 //////


module.exports = router;