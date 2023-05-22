// import mongoose module
const mongoose = require("mongoose");

// schema

const commentSchema = mongoose.Schema({

    comment: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    matchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match"
    },

});

// model Name

const comment = mongoose.model("Comment", commentSchema);

//make file export 

module.exports = comment;