//serve react build
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req,res)=> {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});