// todo-form.js
// Jeremy Campbell
const sessionManager = require("../session-manager");

// TODO: Implement function fully
function buildPage(req) {
    let html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>To-Do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    </head>
    <body>  
    <h1 class="title">To-Do List</h1>
    <table>`;
    
    let items = req.session.items || [];
    for (item in items) {
        html += `<tr>
        <td><input type="checkbox" checked/></td>
        <td>${item.title}</td>
      </tr>`
    }

    html += `</table>
    <p>
      Add new item:
      <input type="text" placeholder="Enter item description" style="width: 60ex" autofocus required/>
      <input type="button" value="Add"/>
    </p>
    </body>
    </html>`;
    
    return html;
}

module.exports = function(req, res) { 
    res.status(200);
    res.type("text/html");
    let html = buildPage(req);
    res.send(html);
};