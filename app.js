const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.use(express.static("PUBLIC"))

app.listen(8080, () => console.log("Server Online"))

