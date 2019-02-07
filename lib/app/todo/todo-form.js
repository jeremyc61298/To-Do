// todo-form.js
// Jeremy Campbell

const {escapeHtml} = require("../common");

function appendHeaders(res) {
  res.write(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible">
        <title>To-Do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="/static/styles/todo.css">
    </head>
    <body>  
    <h1 class="title is-1">To-Do List</h1>`
  );
}

function appendItems(req, res) {
  res.write(`<table>`)
  let items = req.session.items || [];
  let count = 0;
  for (let item of items) {
    res.write(`<tr>
    <td><input type="checkbox" name="item${count++}" value="done" ${(item.done) ? 'checked' : ""}/></td>
    <td>${escapeHtml(item.title)}</td>
    </tr>`);
  }
  req.session.numItems = count;
  res.write(`</table>`)
}

function appendForm(req, res) {
  res.write(`<form>`);
  appendItems(req, res);

  if (req.session.items && req.session.items.length) {
    // There is at least one item, output the Save and Remove Checked buttons
    res.write(`<table><tr>
    <td colspan="2">
      <button type="submit" formaction="/todo/save" formmethod="POST">Save</button>
      <button type="submit" formaction="/todo/remove" formmethod="POST">Remove Checked</button>
    </td>
  </tr></table>`);
  }
  res.write(`</form>`);

  res.write(`<form><p>
  Add new item:
  <input type="text" id="newItem" name="item" placeholder="Enter item description" style="width: 60ex" autofocus required/>
  <button type="submit" formaction="/todo/add" formmethod="POST">Add</button>
</p>
</form>`);
}

function appendEnd(res) {
  res.write(`</body>
  </html>`);
}

function buildPage(req, res) {
  appendHeaders(res);

  // If there are no items
  if (!req.session.items || !req.session.items.length) {
    res.write(`<h4 class="subtitle is-4" id="noItems">No to-do items</h4>`);
  }

  appendForm(req, res);
  appendEnd(res);
}

module.exports = function (req, res) {
  res.status(200);
  res.type("text/html");
  buildPage(req, res);
  res.end();
};