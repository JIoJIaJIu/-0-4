var express = require('express');

var app = express();

app.use('/', express.static('../build'));
app.use('/templates', express.static('../src/templates'));

app.listen(8000);
console.log('Started :8000')
