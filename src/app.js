const express = require("express");
const cors = require("cors");
const { models } = require("mongoose");
const app = express();

/* Settings */
app.set("port", process.env.PORT || 5050);

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/notes", require("./routes/note"));

module.exports = app;
