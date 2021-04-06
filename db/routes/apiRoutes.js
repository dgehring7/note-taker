const router = require("express").Router();
const noteStore = require("../notesStore");

router.get("/notes", (req, res) => {
    noteStore.readNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    noteStore.saveNote(req.body)
    .then((note) =>
        res.json(note))
        .catch((err) => res.status(500).json(err));
});

router.delete("/notes", (req, res) => {
    noteStore.deleteNote()
    .then((note) =>
        res.json(note))
        .catch((err) => res.status(500).json(err));
});