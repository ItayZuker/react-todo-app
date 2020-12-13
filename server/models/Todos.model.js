const mongoose =  require('mongoose') ;
const TodoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        },
    listId: {
        type: String,
        required: true,
    }   ,
    body: {
        type:String,
        required: true,
        },
    completed: {
        type: Boolean,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const TodosModel = mongoose.model('todo', TodoSchema);

module.exports = TodosModel;