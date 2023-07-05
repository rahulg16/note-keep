const express = require('express')
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Hello world")
})

module.exports = app

