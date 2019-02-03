// routes.js
// Jeremy Campbell 

const express = require("express");
const todoform = require("./todo-form");
const addItem = require("./add-item");

var router = express.Router();

router.get("/todo", todoform);
router.post("/todo/add", addItem);

module.exports = router;