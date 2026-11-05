const express = require("express");

const connectdb = require("./config/db");

const app = express();
connectdb


app.get("/", (req, res) => {
    res.send("done");
    
});




modeule.export = app;