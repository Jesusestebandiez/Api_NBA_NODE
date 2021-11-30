const Event = require("../models/event.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createEvent = async (req, res, next) => {
    try {
        const newEvent = new Event();
        newEvent.name = req.body.name;
        newEvent.description = req.body.description;
        newEvent.teams = req.body.teams;
        const EventDb = await newEvent.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { event: EventDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate("teams");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { events: events }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createEvent, getAllEvents }