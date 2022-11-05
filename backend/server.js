const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/dbConnect")
const projectRoutes = require("./routes/project.routes")

connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use("/projects", projectRoutes)
app.use("/", (req, res, next) => {
    console.log("home")
})

mongoose.connection.once('open', () => {
    console.log("CONNECTED TO DATABASE")
    app.listen(PORT, "localhost", (error) => {
        if (error) {
            console.log(error)
            return
        }
        console.log("SERVER RUNNING")
    })
})