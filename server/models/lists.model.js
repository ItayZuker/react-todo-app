const mongoose = require('mongoose');
const listSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    listName: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
    },
    todos: {
        type: Number,
        require: true,
    },
});

const ListsModel = mongoose.model('list', listSchema);

module.exports = ListsModel;