const express = require('express');
const app = express();
const todosRout = require('./routs/Todos.rout.js');
const listsRout = require('./routs/Lists.rout.js');
const usersRout = require('./routs/Users.rout.js');
const path = require('path')
require('./db.js');

app.set('json spaces', 2);
app.use(express.json());


app.use('/todos/api', todosRout);
app.use('/lists/api', listsRout)
app.use('/users/api', usersRout);
app.use('/', express.static(path.join(__dirname, '../client/build')))

let port = 8080
if(process.env.PORT) {
    port = process.env.PORT
}

app.listen(port);