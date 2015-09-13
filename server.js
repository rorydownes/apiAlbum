var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Under Construction');
});

app.listen(3000);

