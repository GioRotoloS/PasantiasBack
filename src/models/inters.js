const mongoose = require('mongoose');
 
const Inter = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    period: {
        type: String,
        required: true
    },
    inter_type: {
        type: String,
        required: true
    },
    tutor: {
        type: String,
        required: true
    },
    advisorys_day: {
        type: String,
        required: true
    },
    advisorys_hour: {
        type: String,
        required: true
    }

});
 
module.exports = mongoose.model('Inters', Inter);