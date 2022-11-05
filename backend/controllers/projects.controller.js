const { StatusCodes } = require("http-status-codes")

const Project = require("../models/projects")

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.find()
        if (!projects) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "No Projects Found" })
        }
        console.log(projects)
        res.status(StatusCodes.OK).json({ projects })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProjects
}