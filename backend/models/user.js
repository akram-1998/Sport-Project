var uniqueValidator = require('mongoose-unique-validator');

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    firstName: String,
    lastName: String,

    email: { type: String, unique: true },
    phoneNumber: Number,
    pwd: String,
    role: String,
    status: String,
    img: String,

});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);

module.exports = user;