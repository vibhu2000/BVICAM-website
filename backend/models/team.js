const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    designation: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    imageType: {
        type: String,
        maxlength: 32,
        enum: ["Faculty", "Support"],
        required: true
    },
    qualification: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    areaofexpertise: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    photo: {
        type: String,
        required: true
    },
    experience:{
        type: String,
        trim: true,
    },
    seminar:{
        type: String,
        trim: true,
    },
    achievements:{
        type: String,
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);