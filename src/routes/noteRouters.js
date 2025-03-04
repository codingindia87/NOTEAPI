const express = require("express");
const auth = require("../middlewares/auth")
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const noteRouters = express.Router();

noteRouters.get("/", auth ,getNote);

noteRouters.post("/", auth, createNote);

noteRouters.delete("/:id", auth, deleteNote);

noteRouters.put("/:id", auth, updateNote);


module.exports = noteRouters;