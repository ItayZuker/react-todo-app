const mongoose = require('mongoose');
const listSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
});

const ListsModel = mongoose.model('list', listSchema);

module.exports = ListsModel;