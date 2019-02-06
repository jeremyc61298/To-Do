// save-done.js
// Jeremy Campbell
// Allows the user to save which items they have checked as completed

module.exports = (req, res) => {
    for (let i = 0; i < req.session.numItems; ++i) {
        let item = req.body[`item${i}`];
        console.log(item);
        if (item === "done"){
            req.session.items[i].done = true;
        } else {
            req.session.items[i].done = false;
        }
    }
    req.session.save(() => {
        res.redirect(303, "/todo");
    });
};