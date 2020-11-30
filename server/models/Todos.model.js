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
        require: true,
        },
    completed: {
        type: Boolean,
        require: true,
    },
});

const TodosModel = mongoose.model('todo', TodoSchema);

module.exports = TodosModel;