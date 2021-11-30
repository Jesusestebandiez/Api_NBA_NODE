const express = require("express");
const router = express.Router();

const { createEvent, getAllEvents } = require("../controllers/event.controller");

router.post("/create", createEvent);
router.get("/", getAllEvents);

module.exports = router;