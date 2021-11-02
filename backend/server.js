const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("cors")())

mongoose.connect("mongodb://localhost/todoApp", { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/signin', require('./routes/signin'))
app.use('/note', require('./routes/notes'))

app.listen(5000, () => console.log("Server Started"))