const util = require("util");
const fs = require("fs");
const uuid = require("uuid");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class NotesStore {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    readNotes() {
        return this.read().then((notes) => {
            let gotNotes;
            try {
                gotNotes = [].concat(JSON.parse(notes));
            }
            catch (err) {
                gotNotes = [];
            }
            return gotNotes;
        });
    }


saveNote(note) {
    const {title, text} = note;

    if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
    }
    const newNote = {title, text, id: uuid()};

    return this.readNotes().then((notes) =>
        [...notes, newNote]
    )
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
}

deleteNote(id) {
    return this.readNotes()
    .then ((notes) => 
        notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
}
}

module.exports = new NotesStore();