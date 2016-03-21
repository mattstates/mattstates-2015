var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

//Handle resquests and responses to the 'root'.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000, function() {
    console.log("this app is listening on port 3000!");
});