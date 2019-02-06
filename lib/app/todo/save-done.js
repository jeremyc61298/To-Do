// save-done.js
// Jeremy Campbell
// Allows the user to save which items they have checked as completed

function moveItemsToSession(req) {
    for (let i = 0; i < req.session.numItems; ++i) {
        let item = req.body[`item${i}`];
        if (item === "done"){
            req.session.items[i].done = true;
        } else {
            req.session.items[i].done = false;
        }
    }
}

function saveSession(req, res) {
    moveItemsToSession(req);
    req.session.save(() => {
        res.redirect(303, "/todo");
    });
}

module.exports = {
    saveSession,
    moveItemsToSession
};