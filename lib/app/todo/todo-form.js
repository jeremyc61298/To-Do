// todo-form.js
// Jeremy Campbell
// TODO: Fix this crap
function appendHeaders(res) {
  res.write(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible">
        <title>To-Do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    </head>
    <body>  
    <h1 class="title is-1">To-Do List</h1>`
  );
}

function appendItems(req, res) {
  // TODO: Should be an empty array if session.items has not been set
  res.write(`<table>`)
  let items = req.session.items || [];
  let count = 0;
  for (let item of items) {
    res.write(`<tr>
    <td><input type="checkbox" name="item${count++}" ${(item.done) ? 'value="done" checked' : ""}/></td>
    <td>${item.title}</td>
    </tr>`);
  }
  req.session.numItems = count;
  res.write(`</table>`)
}

function appendForm(req, res) {
  res.write(`<form>`);

  if (req.session.items && req.session.items.length) {
    // There is at least one item, output the Save and Remove Checked buttons
    res.write(`<table><tr>
    <td colspan="2">
      <input type="button" formaction="/todo/save" formmethod="POST" value="Save"/>
      <input type="button" value="Remove Checked"/>
    </td>
  </tr></table>`);
  }

  res.write(`<p>
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
  appendItems(req, res);

  // If there are no items
  if (!req.session.items || !req.session.items.length) {
    res.write(`<h4 class="subtitle is-4">No to-do items</h4>`);
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