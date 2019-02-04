// routes.js
// Jeremy Campbell 

const express = require("express");
const todoform = require("./todo-form");
const addItem = require("./add-item");
const bodyParser = require("body-parser");

var router = express.Router();
let urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get("/todo", todoform);
router.post("/todo/add", urlEncodedParser, addItem);

module.exports = router;