// ./index.js

// 1. IMPORTACIONES
const express		= require("express")
const app			= express()

const hbs			= require("hbs")

const connectDB		= require("./config/db")

// 2. MIDDLEWARES
require("dotenv").config()

connectDB()

app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.urlencoded({extended: true}))

// 3. RUTEO
// http://localhost:3005/rooms
app.use("/rooms", require("./routes/rooms"))




// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en ${process.env.PORT}`))