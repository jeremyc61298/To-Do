// routes.js
// Jeremy Campbell 

const express = require("express");
const todoform = require("./todo-form");

var router = express.Router();

router.get("/todo", todoform);

module.exports = router;