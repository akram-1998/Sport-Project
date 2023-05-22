// import mongoose module
const mongoose = require("mongoose");

// schema

const matchSchema = mongoose.Schema({

    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,

});

// model Name

const match = mongoose.model("Match", matchSchema);

//make file export 

module.exports = match;