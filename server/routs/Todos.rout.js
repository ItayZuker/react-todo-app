const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose'); 
const TodosModel = require('../models/Todos.model.js');


router.put('/save-update/:todoId', async (req, res) => {                   //////  ---> Update todo body
    await TodosModel                                                           //       -
        .updateOne({                                                           //       Activeted at TodoBody component
            _id: ObjectID.createFromHexString(req.params.todoId),              //
        },                                                                     //
        {                                                                      //
            body: req.body.body,                                               //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                } else {                                                       //
                    res.json(docs);                                            //
                };                                                             //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.put("/todo-true/:todoId", async (req, res) => {                     //////  ---> Update completed state true
    await TodosModel                                                           //       for one todo
        .updateOne({                                                           //       -
            _id: ObjectID.createFromHexString(req.params.todoId)},             //       Activeted at CheckTodo component
        {                                                                      //       
            completed: true,                                                   //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.put("/todo-false/:todoId", async (req, res) => {                    //////  ---> Update completed state false
    await TodosModel                                                           //       for one todo
        .updateOne({                                                           //       -
            _id: ObjectID.createFromHexString(req.params.todoId)},             //       Activeted at CheckTodo component
        {                                                                      //
            completed: false,                                                  //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                //////
});

router.put('/all-todos-completed-true/:listId', async (req, res) => {      //////  ---> Update completed state true
    await TodosModel                                                           //       for all false completed state todos
        .updateMany({                                                          //       in specific list
            listId: req.params.listId,                                         //       -
            completed: false,                                                  //       Activeted at CheckAll component
        },                                                                     //       
        {                                                                      //
            completed: true,                                                   //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.put('/all-todos-completed-false/:listId', async (req, res) => {     //////  ---> Update completed state false
    await TodosModel                                                           //       for all true completed state todos
        .updateMany({                                                          //       in specific list
            listId: req.params.listId,                                         //       -
            completed: true,                                                   //       Activeted at CheckAll component
        },                                                                     //       
        {                                                                      //
            completed: false,                                                  //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.delete('/delete-user/:userId', async (req, res) => {                //////  ---> Delete all todos of one user
    await TodosModel                                                           //       -
        .deleteMany({                                                          //       Activeted at MenuItemDeleteUder
            userId: ObjectID.createFromHexString(req.params.userId),           //       component
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.delete('/delete-todo/:todoId', async (req, res) => {                //////  ---> Delete one todo even if not completed
    await TodosModel                                                           //       -
        .deleteOne({                                                           //       Activeted by DeleteButton component
            _id: ObjectID.createFromHexString(req.params.todoId)               //       
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.post('/new-todo', async (req, res) => {                             //////  ---> Create new todo item
    await TodosModel                                                           //       For a spesific list
        .create({                                                              //       -
            userId: req.body.userId,                                           //       Activeted by TodoInput component
            listId: req.body.listId,                                           //       
            body: req.body.body,                                               //       
            completed: req.body.completed,                                     //
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


router.get("/get-list/:listId", async (req, res) => {                      //////  ---> This router sends all todos
    const docs = await TodosModel                                              //       For spcific list
        .find({                                                                //       -
            listId: req.params.listId,                                         //       Activeted at List component
        }, (err, docs) => {                                                    //
            if(err) {                                                          //
                console.log(err);                                              //
                res.status(500).send();                                        //
            } else {                                                           //
                if(!docs) {                                                    //
                    res.status(404).send();                                    //
                }                                                              //
                res.json(docs);                                                //
            };                                                                 //
        });                                                                    //
});                                                                        //////


module.exports = router;