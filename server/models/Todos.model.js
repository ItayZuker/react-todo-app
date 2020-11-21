const mongoose =  require('mongoose') ;
const TodoSchema = new mongoose.Schema({
    body: {
        type:String,
        require: true,
        },
    complited: Boolean,
});

const TodosModel = mongoose.model('todo', TodoSchema);

module.exports = TodosModel;