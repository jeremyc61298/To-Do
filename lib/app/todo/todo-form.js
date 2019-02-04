// todo-form.js
// Jeremy Campbell
// TODO: Fix this crap

function appendItems(req) {
  // TODO: Should be an empty array if session.items has not been set
  let items_html = "";
    let items = req.session.items || [{title: "Do this better", done: false}, {title: "Please do this better", done: true}];
    
    for (let item of items) {
      items_html += `<tr>
      <td><input type="checkbox" ${(item.done) ? "checked" : ""}/></td>
      <td>${item.title}</td>
      </tr>`
    }
  return items_html;
}

function appendButtons(req) {
  let buttons_html = "";
  if (req.session.items && req.sessions.items.length) {
    // There is at least one item, output the Save and Remove Checked buttons
    buttons_html += `<tr>
    <td colspan="2">
      <input type="button" value="Save"/>
      <input type="button" value="Remove Checked"/>
    </td>
  </tr>`;
  }
  return buttons_html;
}

function buildPage(req) {
  let html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible">
        <title>To-Do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    </head>
    <body>  
    <h1 class="title is-1">To-Do List</h1>
    <table>`;

  html += appendItems(req);
  html += appendButtons(req);
  html += `</table>`;

  if (req.session.items && !res.session.items.length) {
    html += `<h4 class="subtitle is-4">No to-do items</h4>`;
  }
  
  html += `<p>
      Add new item:
      <input type="text" placeholder="Enter item description" style="width: 60ex" autofocus required/>
      <button type="submit" formaction="/todo/add">Add</button>
    </p>
    </body>
    </html>`;

  return html;
}

module.exports = function (req, res) {
  res.status(200);
  res.type("text/html");
  let html = buildPage(req);
  res.send(html);
};