const Express = require('express');
const path = require('path');

const app = Express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.json({ test: 'test' });
});

const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});