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
    todos: {
        type: Number,
        require: true,
    },
    completed: {
        type: Number,
        default: 0,
    },
    allCompleted: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
});

const ListsModel = mongoose.model('list', listSchema);

module.exports = ListsModel;