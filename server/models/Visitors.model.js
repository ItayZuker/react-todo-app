const mongoose = require('mongoose');
const VisitorSchems = mongoose.Schema({
    ip: {
        type: String,
        require: true,
    },
    visits: {
        type: Number,
        require: true,
    },
    lastDay: {
        type: String,
    },
    lastTime: {
        type: String,
    }
});

const VisitorsModel = mongoose.model('visitor', VisitorSchems);

module.exports = VisitorsModel;