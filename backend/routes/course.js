const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { createCourse,getCourses,getCourseType,getCourse,getCourseById, getAllCourses, deleteCourse, updateCourse } = require("../controllers/course");

router.post("/addCourse", createCourse);

router.param("courseType", getCourseType);

router.get("/getCourses/:courseType", getCourses);

router.get("/getCourses/", getCourses);

router.get("/getCourse/:courseId", getCourse);

router.param("courseId", getCourseById);

router.get("/getAllCourses", getAllCourses);

router.delete("/deleteCourse/:courseId", deleteCourse);

router.put("/updateCourse/:courseId", updateCourse);


module.exports = router;