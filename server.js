const express = require("express")

let server = express();

server.get("/home", (req, res) => {
    res.send("its works!")
})

let port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("server its running on port " + port)
})

module.exports = server;