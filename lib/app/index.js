// app/index.js
// Jeremy Campbell
// Application for To-Do. Exports "app"
const express = require("express");
const morgan = require("morgan");

const app = express();

// Logging
app.use(morgan("dev"));

// Session Creation
app.use(require("./session-manager"));

// Main page which is already mounted on /todo
app.use(require("./todo/routes"));

// No path is specified
app.use("/", (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + "/static/html/root.html");
});

// Export
module.exports = app;