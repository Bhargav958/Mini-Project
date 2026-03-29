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
// mongoose.connect("mongodb://mongo:27017/test")
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// Schema
// const Note = mongoose.model("Note", { text: String });
let notes = [];

// Routes
app.get("/notes", (req, res) => {
    res.json(notes);
});

app.post("/notes", (req, res) => {
    const note = { text: req.body.text };
    notes.push(note);
    res.json(note);
});

app.listen(5000, () => console.log("Server running"));