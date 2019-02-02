// session-manager/index.js
// Jeremy Campbell
const expressSession = require("express-session");
const sessionFileStore = require("session-file-store");

const fileStore = sessionFileStore(expressSession);

modeule.exports = expressSession({
    secret: "spider-man",
    saveUninitialized: false,
    resave: false,
    store: new fileStore(),
});