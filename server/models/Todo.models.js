const mongoose =  require('mongoose') ;
const TodoSchema = new mongoose.Schema({
    body: {
        type:String,
        require: true,
        },
    complited: Boolean,
});

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = TodoModel;