const Assign = require("../models/assign");
const formidable = require("formidable");

exports.createTeacher = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with assigning teacher",
            });
        }
        //destructure the fields
        const { teacherName, subjectName } = fields;
        if (!teacherName || !subjectName) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }
        let assign = new Assign(fields);

        assign.save((err, assign) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }
            res.json(assign);
        });
    });
};

exports.getAllTeachers = (req, res) => {
    Assign.find()
        .exec((err, users) => {
            if (err) {
                res.status(400).json({
                    error: "No Teachers FOUND",
                });
            }
            //console.log(users);
            res.json(users);
        });
};

exports.getTeacherById = (req, res, next, id) => {
    Assign.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }
        req.assign = user;
        req.id=id;
        next();
    });
};

exports.deleteTeacher = (req, res) => {
    let assign = req.assign;
    assign.remove((err, deletedTeacher) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete",
            });
        }
        //deleting the startup

        res.json({
            message: "Deletion was a success",
            deletedTeacher,
        });
    });
};
