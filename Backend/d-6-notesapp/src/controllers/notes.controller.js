const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
    try {
        let { title, description } = req.body

        let  newNote = await NotesModel.create({
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
}

module.exports = createNotesController;
