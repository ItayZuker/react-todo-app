const mongoose =  require('mongoose') ;
const TodoSchema = new mongoose.Schema({
    userId: String,
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