const mongoose = require('mongoose');

let dburl = 'mongodb://localhost:27017/todo-app'
if (process.env.DB_URL) {
    dburl = process.env.DB_URL
}

mongoose.connect(dburl, {useNewUrlParser: true});


// this lines are not requierd
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connect");
});
