// todo/add.js
// Jeremy Campbell
// Accept a URL-encoded form with a parameter named item whose value is the text for the item
// Item added to the end of the list of to-do items
// Server responds by issuing a redirect to the main To-Do web page with a 303 status code

module.exports = (req, res) => {
    if (!req.body.item){
        //TODO: Change this status?
        return res.sendStatus(400);
    }

    if (!req.session.items) {
        req.session.items = [];
    }

    let newItem = {
        title: req.body.item,
        done: false,
    }

    req.session.items.push(newItem);
    console.log(req.session.items);
    res.redirect(303, "/todo");
};