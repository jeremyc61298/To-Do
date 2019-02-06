// save-done.js
// Jeremy Campbell
// Allows the user to save which items they have checked as completed

// This is not working quite yet
module.exports = (req, res) => {
    for (let i = 0; i < numItems; ++i) {
        let item = req.session[`item${i}`];
        if (item === "done"){
            req.session[i].done = true;
        }
    }
};