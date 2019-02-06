// remove-done.js
// Jeremy Campbell 
// Removes all of the items from parameters that are marked "done" 
// and redirects to main page
const saveDone = require("./save-done");

module.exports = (req, res) => {
    saveDone.moveItemsToSession(req);

    // https://love2dev.com/blog/javascript-remove-from-array/ 
    // Showed me how to use the filter method of an array
    req.session.items = req.session.items.filter((value, index, arr) => {
        return !value.done;
    });

    req.session.save(() => {
        res.redirect(303, "/todo");
    })
};