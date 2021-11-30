const express = require("express");
const router = express.Router();

const { createTeam, getAllTeam, getTeamById } = require("../controllers/team.controller");

router.post("/create", createTeam);
router.get("/", getAllTeam);
router.get("/:teamId", getTeamById);

module.exports = router;