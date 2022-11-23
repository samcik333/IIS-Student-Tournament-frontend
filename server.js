import express from "express"
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/demopr'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/demopr/index.html'));
});
app.listen(process.env['PORT'] || 5005);