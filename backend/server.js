const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/test");

const Note = mongoose.model("Note", { text: String });

app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.post("/notes", async (req, res) => {
    const note = new Note({ text: req.body.text });
    await note.save();
    res.json(note);
});

app.listen(5000, () => console.log("Server running"));