const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    semester:{
        type: String,
        enum: ["Bridge Course", "Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"],
        required: true,
    },

    courseType:{
        type: String,
        enum: ["MCA","BA(JMC)"],
        required: true,
    },
    
    subName: {
        type: String,
        trim: true,
        required: true,
    },
    
    syllabus: {
        type: String,
        trim: true,
    },
    syllabusNames: {
        type: String,
        trim: true,
    },

    courseMaterial: {
        type: String,
        trim: true,
    },
    courseMaterialNames: {
        type: String,
        trim: true,
    },

    intppr: {
        type: String,
        trim: true,
    },
    intpprNames: {
        type: String,
        trim: true,
    },
    
    extppr: {
        type: String,
        trim: true,
    },
    extpprNames: {
        type: String,
        trim: true,
    },

    labFile: {
        type: String,
        trim: true,
    },
    labFileNames: {
        type: String,
        trim: true,
    },

    assignment: {
        type: String,
        trim: true,
    },
    assignmentNames: {
        type: String,
        trim: true,
    },

    teacher: {
        type: String,
        maxlength: 100,
        required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);