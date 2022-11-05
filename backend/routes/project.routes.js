const express = require("express")

const projectController = require("../controllers/projects.controller")

const projectRouter = express.Router()

// route to get all projects
projectRouter.get("/", projectController.getAllProjects)

module.exports = projectRouter