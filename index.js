require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app', "dist")))
app.use("/api", require("./routers"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'app', "dist", 'index.html'));
})

const port = process.env.PORT || 8080
const host = process.env.HOST || null
app.listen(port, host, () => {
    console.warn("Server is listening on port " + port + " !" )
})