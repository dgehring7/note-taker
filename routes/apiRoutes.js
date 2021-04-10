const router = require("express").Router();
const noteStore = require("../notesStore");

router.get("/notes", (req, res) => {
    noteStore.readNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// router.post("/notes", (req, res) => {
//     noteStore.saveNote(req.body)
//     .then((note) =>
//         res.json(note))
//         .catch((err) => res.status(500).json(err));
// });

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = (notes.length + 1);
    fs.readFile(db, 'utf8', (err, data) => {
      // err handle
      // parse data
      const thisNote = fs.readFileSync(path.join(__dirname, 'db/db.json'));
      const notes = JSON.parse(thisNote);
      // add new Note with data.push
      notes.push(newNote);
      // stringify data
      const response = JSON.stringify(notes);
      fs.writeFileSync(path.join(__dirname, '/db/db.json') (err), response);
        // end response, send response
        res.json(newNote);
      })
    })

router.delete("/notes", (req, res) => {
    noteStore.deleteNote()
    .then((note) =>
        res.json(note))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;