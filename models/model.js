const mongoose = require('mongoose');

// Schema
const patientSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    doctor: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Patient', patientSchema);