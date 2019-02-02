// todo-form.js
// Jeremy Campbell

module.exports = (req, res) => { 
    res.status(200);
    res.type("text/html");
    res.send(`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>To-Do</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>  
<h1>To-Do List</h1>
<table>
  <tr>
    <td><input type="checkbox" checked/></td>
    <td>Learn Node</td>
  </tr>
  <tr>
    <td><input type="checkbox" checked/></td>
    <td>Learn Express</td>
  </tr>
  <tr>
    <td><input type="checkbox"/></td>
    <td>Get lots of practice</td>
  </tr>
  <tr>
    <td><input type="checkbox"/></td>
    <td>Conquer the world</td>
  </tr>
  <tr>
    <td colspan="2">
      <input type="button" value="Save"/>
      <input type="button" value="Remove Checked"/>
    </td>
  </tr>
</table>
<p>
  Add new item:
  <input type="text" placeholder="Enter item description" style="width: 60ex" autofocus required/>
  <input type="button" value="Add"/>
</p>
</body>
</html>
`);
};