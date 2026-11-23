const express = require ("express");
const createNotesController = require("../controllers/notes.controller");

const router = express.Router()


router.post("/create",createNotesController);

modeule.exports = router;
