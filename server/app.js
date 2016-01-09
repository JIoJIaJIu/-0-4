var express = require('express');

var app = express();

app.use('/templates', express.static('../src/templates'));
app.use('/directives', express.static('../src/directives'));
app.use('/components', express.static('../src/templates'));
app.use('/data', express.static('../src/data'));
app.use('/', express.static('../build'));

app.listen(8000);
console.log('Started :8000')
