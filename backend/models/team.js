const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({

    teamName: String,
    owner: String,

    foundation: Number,
    stadiumId: Number,

});

const team = mongoose.model("Team", teamSchema);

module.exports = team;
