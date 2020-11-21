const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        },
});

const UsersModel = mongoose.model('user', UserSchema);

module.exports = UsersModel;