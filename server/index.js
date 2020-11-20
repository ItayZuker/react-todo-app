const express = require('express');
const app = express();
const todoListRout = require('./routs/TodoList.js');
require('./db.js');

app.set('json spaces', 2);
app.use(express.json());


app.use('/todos/api', todoListRout);


app.listen(8080);