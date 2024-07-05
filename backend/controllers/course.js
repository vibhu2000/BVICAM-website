const Course = require("../models/course");
const formidable = require("formidable");

exports.createCourse = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with course",
            });
        }
        //destructure the fields
        const { subName,
            semester,
            courseType,
            syllabus,syllabusNames,
            courseMaterial,courseMaterialNames,
            intppr,intpprNames,
            extppr,extpprNames,
            labFile,labFileNames,
            assignment,assignmentNames,
            teacher} = fields;
        if (!subName || !semester || !courseType || !teacher) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }
        let course = new Course(fields);

        course.save((err, course) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }
            res.json(course);
        });
    });
};

exports.getCourseType = (req, res, next, id) => {
    if (Course.schema.path('courseType').enumValues.includes(id)) {
        req.courseType = id;
        next();
    } else {
        res.status(400).json({
            error: "Not Found",
        });
    }

};

exports.deleteCourse = (req, res) => {
    let course = req.course;
    course.remove((err, deletedCourse) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the subject",
            });
        }
        //deleting

        res.json({
            message: "Deletion was a success",
            deletedCourse,
        });
    });
};

exports.getAllCourses = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    //let sortBy = req.query.sortBy ? req.query.sortBy : "imageType";

    Course.find()
        // .sort([
        //     [sortBy, "asc"]
        // ])
        .exec((err, courses) => {
            if (err) {
                res.status(400).json({
                    error: "NOT FOUND",
                });
            }
            res.json(courses);
        });
};

exports.getCourses = (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : "semester";
    Course.find({ courseType: req.courseType })
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, courses) => {
            if (err) {
                return res.status(400).json({
                    error: "NOT FOUND",
                });
            }
            res.json(courses);
        });
};

exports.getCourse = (req, res) => {

    res.json(req.course);
}

exports.getCourseById = (req, res, next, id) => {
    Course.findById(id).exec((err, course) => {
        if (err || !course) {
            return res.status(400).json({
                error: "Course not found",
            });
        }
        req.course = course;
        req.id = id;
        next();
    });
};

//update
exports.updateCourse = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with subject",
            });
        }
        //save to the DB
        Course.findByIdAndUpdate({ _id: req.id }, { $set: fields }, { new: true, useFindAndModify: false },
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