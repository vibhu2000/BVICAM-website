const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 4,
        required: true
    },
    subName: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);