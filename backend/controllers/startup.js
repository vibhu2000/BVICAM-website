const Startup = require("../models/startup");
const formidable = require("formidable");

exports.getImageType = (req, res, next, id) => {
    //console.log(Startup.schema.path('imageType').enumValues.includes(id), id);
    if (Startup.schema.path('imageType').enumValues.includes(id)) {
        req.imageType = id;
        next();
    } else {
        res.status(400).json({
            error: "Not Found",
        });
    }

};
exports.getStartupById = (req, res, next, id) => {
    Startup.findById(id).exec((err, startup) => {
        if (err || !startup) {
            return res.status(400).json({
                error: "Notice not found",
            });
        }
        req.startup = startup;
        req.id = id;
        next();
    });
};

exports.getAllStartup = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    Startup.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, images) => {
            if (err) {
                res.status(400).json({
                    error: "No notices FOUND",
                });
            }
            res.json(images);
        });
};

exports.getStartup = (req, res) => {

    res.json(req.startup);
}
exports.createStartup = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with notice",
            });
        }
        //destructure the fields
        const { name, description, url, photo, imageType, file, fileName } = fields;
        if (!name || !description || !imageType) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }
        let startup = new Startup(fields);

        startup.save((err, startup) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }
            res.json(startup);
        });
    });
};

exports.getStartups = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    Startup.find({ imageType: req.imageType })
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, startups) => {
            if (err) {
                return res.status(400).json({
                    error: "NOT FOUND",
                });
            }
            res.json(startups);
        });
};

// delete controllers
exports.deleteStartup = (req, res) => {
    let startup = req.startup;
    startup.remove((err, deletedStartup) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the notice",
            });
        }
        //deleting 

        res.json({
            message: "Deletion was a success",
            deletedStartup,
        });
    });
};
//update
exports.updateStartup = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with notice",
            });
        }
        //save to the DB
        Startup.findByIdAndUpdate({ _id: req.id }, { $set: fields }, { new: true, useFindAndModify: false },
            (err, mem) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        error: "You are not authorized to update this notice"
                    });
                }
                res.json(mem);
            }
        );
    });
};