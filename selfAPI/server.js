var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require('./app/routes/news.routes.js')(app);

// Create a Server
var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://localhost:", host, port)

})