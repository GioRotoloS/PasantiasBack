const mongoose = require('mongoose');
 
const Tutor = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    period: {
        type: String
    },
    day_1: {
        type: String
    },
    hour1: {
        type: String
    },
    day_2: {
        type: String
    },
    hour2: {
        type: String
    }
});
 
module.exports = mongoose.model('Tutors', Tutor);