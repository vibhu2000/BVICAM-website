const express = require("express");
const router = express.Router();
const { createTeacher, getAllTeachers, getTeacherById, deleteTeacher } = require("../controllers/assign");
    
router.post("/assignTeacher", createTeacher);
router.get("/getAllTeachers", getAllTeachers);
router.param("userId", getTeacherById);
router.delete("/deleteTeacher/:userId",deleteTeacher);

module.exports = router;