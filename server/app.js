var express = require('express');

var app = express();

app.use('/', express.static('../build'));
app.use('/pages', express.static('../src/pages'));

app.listen(8000);
console.log('Started :8000')
