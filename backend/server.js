const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   // ✅ ADD THIS

const app = express();

// ✅ ENABLE CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/test")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const Note = mongoose.model("Note", { text: String });

// Routes
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