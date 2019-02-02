// app/index.js
// Jeremy Campbell
// Application for To-Do. Exports "app"
const express = require("express");

const app = express();

// No path is specified
app.use("/", (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + "/static/html/root.html");
});

// Export
module.exports = app;