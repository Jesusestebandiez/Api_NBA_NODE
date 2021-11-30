const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema(
    {
        name: { type: String, require: true },
        city: { type: String, require: true },
        color: { type: String, require: true },
       
    },
    { timestamps: true }
);

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;