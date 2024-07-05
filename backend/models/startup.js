const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const startupSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000,
        required: true
    },
    imageType: {
        type: String,
        maxlength: 32,
        enum: ["Admission", "Examinations", "Placements", "StudentsWelfare", "TimeTable", "Attendance", "Activities", "Achievements", "Others"],
        required: true
    },
    photo: {
        type: String,
        trim: true,
        default: "",
    },
    url: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    file: {
        type: String,
        trim: true,    
    },
    fileName: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Startup", startupSchema);