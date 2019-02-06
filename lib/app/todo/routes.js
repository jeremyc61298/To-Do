// routes.js
// Jeremy Campbell 

const express = require("express");
const todoform = require("./todo-form");
const addItem = require("./add-item");
const saveDone = require("./save-done");
const removeDone = require("./remove-done");

var router = express.Router();

router
    .get("/todo", todoform)
    .post("/todo/add", addItem)
    .post("/todo/save", saveDone.saveSession)
    .post("/todo/remove", removeDone);

module.exports = router;