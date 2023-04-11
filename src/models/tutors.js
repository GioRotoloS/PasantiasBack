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
    hour1_1: {
        type: String
    },
    hour1_2: {
        type: String
    },
    hour1_3: {
        type: String
    },
    hour1_4: {
        type: String
    },
    hour1_5: {
        type: String
    },
    hour1_6: {
        type: String
    },
    hour1_7: {
        type: String
    },
    hour1_8: {
        type: String
    },
    hour1_9: {
        type: String
    },
    hour1_10: {
        type: String
    },
    day_2: {
        type: String
    },
    hour2_1: {
        type: String
    },
    hour2_2: {
        type: String
    },
    hour2_3: {
        type: String
    },
    hour2_4: {
        type: String
    },
    hour2_5: {
        type: String
    },
    hour2_6: {
        type: String
    },
    hour2_7: {
        type: String
    },
    hour2_8: {
        type: String
    },
    hour2_9: {
        type: String
    },
    hour2_10: {
        type: String
    }
});
 
module.exports = mongoose.model('Tutors', Tutor);