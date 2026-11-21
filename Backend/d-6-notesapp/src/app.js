
const express = require("express");
const notesModel = require("./models/notes.model");
const connectDb = require("./config/db");

const app = express();

app.use(express.json());
connectDb();

// Home route
app.get("/", (req, res) => {
    res.send("ok got it");
});

// Create note
app.post("/create", async (req, res) => {
    try {
        let { title, description } = req.body

        let  newNote = await notesModel.create({
            title,
            description,
        });
            return res.status(201).json({
            message: "Note created successfully",
            data: newNote,
        });


    } catch (error) {
        console.log("Error in creation:", error);

        return res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }
});

module.exports = app;
