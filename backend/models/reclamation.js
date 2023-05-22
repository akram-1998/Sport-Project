const mongoose = require("mongoose");

const reclamationSchema = mongoose.Schema({

    subject: String,
    description: String,
    userId: String,

});

const reclamation = mongoose.model("Reclamation", reclamationSchema);

module.exports = reclamation;