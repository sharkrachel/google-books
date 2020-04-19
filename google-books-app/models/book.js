const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create book table
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    plot: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    }
})