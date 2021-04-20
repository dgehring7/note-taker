const router = require("express").Router();
const noteStore = require("../notesStore");
const path = require("path");
const fs = require("fs");


router.get('/notes', (req, res) => {
  // console.log("got a get request");
  res.sendFile(path.join(__dirname, '../db/db.json'))
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
      // parse data
      // console.log(path.join(__dirname, '../db/db.json'));
      const thisNote = fs.readFileSync(path.join(__dirname, '../db/db.json'));
      const notes = JSON.parse(thisNote);
      // add new Note with data.push
      // newNote.id = (notes.length + 1);
      notes.push(newNote);
      // stringify data
      const response = JSON.stringify(notes);
      fs.writeFileSync(path.join(__dirname, '../db/db.json'), response);
        // end response, send response
        res.json(notes);
      });

router.delete("/notes", (req, res) => {
    const words = req.body;
    // const letters = parseInt(words);
    fs.readFileSync(path.join(__dirname, '../db/db.json'));
      res.json(words);
});

module.exports = router;