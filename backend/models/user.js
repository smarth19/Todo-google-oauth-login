const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    title: String,
    detail: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    notes: [notesSchema]
})

module.exports = {
    User: mongoose.model("users", userSchema),
    Note: mongoose.model("notes", notesSchema),
}