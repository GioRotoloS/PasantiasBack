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
        day: {
            type: String
        },
        hour_1: {
            type: String
        },
        hour_2: {
            type: String
        },
        hour_3: {
            type: String
        },
        hour_4: {
            type: String
        },
        hour_5: {
            type: String
        },
        hour_6: {
            type: String
        },
        hour_7: {
            type: String
        },
        hour_8: {
            type: String
        },
        hour_9: {
            type: String
        },
        hour_10: {
            type: String
        }
    },
    day_2: {
        day: {
            type: String
        },
        hour_1: {
            type: String
        },
        hour_2: {
            type: String
        },
        hour_3: {
            type: String
        },
        hour_4: {
            type: String
        },
        hour_5: {
            type: String
        },
        hour_6: {
            type: String
        },
        hour_7: {
            type: String
        },
        hour_8: {
            type: String
        },
        hour_9: {
            type: String
        },
        hour_10: {
            type: String
        }
    }
});
 
module.exports = mongoose.model('Tutors', Tutor);