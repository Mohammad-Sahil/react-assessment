const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    class: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true,
        minlength: 1
    },
    paidStatus: {
        type: Boolean,
        required: true
    },
    attendancePercent: {
        type: Number,
        required: true
    },
    roll: {
        type: String,
        required: true,
        unique: true
    }

});

const studentDetails = new mongoose.model('studentDetails', studentDetailsSchema);

module.exports = studentDetails;

