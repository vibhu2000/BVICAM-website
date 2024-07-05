const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember, getImageType,  getTeamMember, getAllTeam } = require("../controllers/team")

//to upload the team members
router.post("/createMemeber", isSignedIn, createTeamMember);
// to get all the team members
router.get("/getAllTeam", getAllTeam);
router.param("imageType", getImageType);

router.get("/getTeam/:imageType", getTeam);
//to update the team members
router.param("memberId", getTeamMemberById)
router.get("/getTeamMember/:memberId", getTeamMember);
router.put("/updateTeamMember/:memberId", isSignedIn, updateTeamMember);
// //to delete the team member
router.delete("/deleteMember/:memberId", isSignedIn, deleteTeamMember)


module.exports = router;