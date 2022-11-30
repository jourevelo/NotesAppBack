let noteCtrl = {};
const { findById } = require("../models/Note");
const Note = require("../models/Note");

noteCtrl.getAllNotes = async (req, res) => {
  let notes = await Note.find();
  res.json(notes);
};

noteCtrl.createNote = async (req, res) => {
  const { userId, title, body } = req.body;
  const newNote = new Note({ userId, title, body });
  await newNote.save();
  res.json({ savedNote: true });
};

noteCtrl.deleteNote = async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.json({ deletedNote: true });
};

noteCtrl.updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;
  await Note.findByIdAndUpdate(id, { title, body });
  res.json({ updateNote: true });
};

noteCtrl.getNote = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  res.json(note);
};
module.exports = noteCtrl;
