const mongoose = require("mongoose")

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gitHubLink: {
        type: String,
        required: true
    },
    hostedLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("project", projectSchema)