const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({

    name: String,
    age: Number,

    number: Number,

    position: String,

    teamId: Number,
});

const player = mongoose.model("Player", playerSchema);

module.exports = player;