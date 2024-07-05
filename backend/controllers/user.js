const images = require("../models/images");
const team = require("../models/team");
const User = require("../models/user");

exports.updatePasswordById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }
        user.updatePassword(req.body.password);
        req.profile = user;
        next();
    });
};

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }

        req.user = user;
        req.id = id;
        next();
    });
};

exports.getAllUsers = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    //let sortBy = req.query.sortBy ? req.query.sortBy : "imageType";

    User.find()
        // .sort([
        //     [sortBy, "asc"]
        // ])
        .exec((err, users) => {
            if (err) {
                res.status(400).json({
                    error: "No Users FOUND",
                });
            }
            res.json(users);
        });
};

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
};

exports.deleteUser = (req, res) => {
    let user = req.user;
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the user",
            });
        }
        //deleting

        res.json({
            message: "Deletion was a success",
            deletedUser,
        });
    });
};

exports.updateUserPassword = (req, res) => {
    User.findByIdAndUpdate({ _id: req.profile._id }, { $set: { encry_password: req.profile.encry_password } }, { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to update this user"
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.json(user);
        }
    );
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to update this user"
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.json(user);
        }
    );
};

exports.getOverview = async(req, res) => {
    let overview = {
        Events: 0,
        Faculty: 0,
        Gallery: 0,
        SliderImages: 0
    }

    overview.Events = await images.countDocuments({ imageType: "Event" });
    overview.Faculty = await team.countDocuments();
    overview.Gallery = await images.countDocuments({ imageType: "Gallery" });
    overview.SliderImages = await images.countDocuments({ imageType: "SliderImg" });
    res.json(overview);
}