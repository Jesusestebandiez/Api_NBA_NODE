const Team = require("../models/team.models");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createTeam = async (req, res, next) => {
    try {
        const newTeam = new Team();
        newTeam.name = req.body.name;
        newTeam.city = req.body.city;
        newTeam.color = req.body.color;
        const TeamDb = await newTeam.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { team: TeamDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllTeam = async (req, res, next) => {
    try {
        // Si no pasais paginación por query params quitar el if
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 3;
            const Team = await Team.find().skip(skip).limit(3);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { team: team }
            });
        } else {
            const team = await Team.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { team: team }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getTeamById = async (req, res, next) => {
    try {
        const { teamId } = req.params;
        const teamById = await Team.findById(teamId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { team: teamById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createTeam, getAllTeam, getTeamById };