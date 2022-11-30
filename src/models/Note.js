const { Schema, model } = require("mongoose");
const NoteSchema = new Schema(
  {
    userId: String,
    tittle: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("note", NoteSchema);
