const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
    stepNumber: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
        default: 'Settings' // Default lucide icon
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Process', processSchema);
