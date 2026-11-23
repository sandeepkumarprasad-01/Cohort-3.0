
const express = require("express");
const notesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const notesRoute=require("./controllers/notes.controller")

const app = express();

app.use(express.json());
connectDb();

// Home route
app.get("/", (req, res) => {
    res.send("ok got it");
});

// Create note
app.post("/create",createNotesController );

app.use("/notes",notesRoute)

module.exports = app;
