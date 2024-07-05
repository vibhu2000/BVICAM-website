const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const assignSchema = new mongoose.Schema({
    subjectName:{
        type: String,
        required: true,
    },

    teacherName:{
        type: String,
        required: true,
    },
    
}, { timestamps: true });

module.exports = mongoose.model("Assign", assignSchema);