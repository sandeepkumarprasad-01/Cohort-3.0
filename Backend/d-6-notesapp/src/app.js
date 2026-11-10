const express = require("express");
const notesModel = require("./models/notes.model");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("ok got it  ")
});


app.post('/create', (req, res) => {
    try {
        let { title, description } = req.body

        let newNote = await notesModel.create({
            title,
            description,
        })

        return res.status(201).json({
            message:
            })
    } catch (error) {
        console.log("errror in creation",error)
}
module.exports = app;
