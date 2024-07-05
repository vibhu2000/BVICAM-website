const Team = require("../models/team");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");


exports.getImageType = (req, res, next, id) => {
    // console.log(Team.schema.path('imageType').enumValues.includes(id), id);
    if (Team.schema.path('imageType').enumValues.includes(id)) {
        req.imageType = id;
        next();
    } else {
        res.status(400).json({
            error: "Not Found",
        });
    }
};

exports.getTeamMemberById = (req, res, next, id) => {
    Team.findById(id).exec((err, member) => {
        if (err || !member) {
            return res.status(400).json({
                error: "member not found",
            });
        }

        req.member = member;
        req.id = id;
        next();
    });
};

exports.getTeamMember = (req, res) => {
    return res.json(req.member);
};
exports.createTeamMember = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }
        //destructure the fields
        const { name, designation, qualification, areaofexpertise, email, photo,experience, seminar, achievements } = fields;

        if (!name || !designation || !qualification || !areaofexpertise || !email || !photo) {
            return res.status(400).json({
                error: "Please include all fields"
            });
        }

        let team = new Team(fields);

        //save to the DB
        team.save((err, team) => {
            if (err) {
                res.status(400).json({
                    error: "Saving Team Member in DB failed"
                });
            }
            res.json(team);
        });
    });
};

exports.getTeam = (req, res) => {
    Team.find({ imageType: req.imageType })
        .sort([
            ["role", "asc"]
        ])
        .exec((err, members) => {
            if (err) {
                return res.status(400).json({
                    error: "No faculty member found",
                });
            }
            res.json(members);
        });
};

exports.getAllTeam = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    
    Team.find()
        .sort([
            ["role", "asc"]
        ])
        .exec((err, images) => {
            if (err) {
                res.status(400).json({
                    error: "No faculty member found",
                });
            }
            res.json(images);
        });
};

// delete controllers
exports.deleteTeamMember = (req, res) => {
    let member = req.member;
    member.remove((err, deletedMember) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the member",
            });
        }
        res.json({
            message: "Deletion was a success",
            deletedMember,
        });
    });
};
//update the team member
exports.updateTeamMember = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {

        //updation code
        let member = req.member;
        member = _.extend(member, fields);

        //save to the DB
        Team.findByIdAndUpdate({ _id: req.id }, { $set: member }, { new: true, useFindAndModify: false },
            (err, mem) => {
                if (err) {
                    return res.status(400).json({
                        error: "You are not authorized to update this team"
                    });
                }
                res.json(mem);
            }
        );
    });
};