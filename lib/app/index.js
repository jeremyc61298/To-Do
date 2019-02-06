// app/index.js
// Jeremy Campbell
// Application for To-Do. Exports "app"
const express = require("express");
const morgan = require("morgan");
const expressSession = require("express-session");
const sessionFileStore = require("session-file-store");
const bodyParser = require("body-parser");

const app = express();

// Logging
app.use(morgan("dev"));

// Session Creation
const fileStore = sessionFileStore(expressSession);
app.use(expressSession({
    secret: "spider-man",
    saveUninitialized: false,
    resave: false,
    store: new fileStore(),
}));

// Use the body-parser to get post data
app.use(bodyParser.urlencoded({extended: true}));

// Main page which is already mounted on /todo
app.use(require("./todo/routes"));

// No path is specified
app.use("/", (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + "/static/html/root.html");
});

// Export
module.exports = app;