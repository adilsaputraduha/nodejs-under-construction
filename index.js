const express = require('express');
const path = require('path');
const app = express();

const appRouting  = require('./src/routers/app-route');

app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname, 'src/assets')));

app.use('/', appRouting);

app.listen(8080, () => {
    console.log('Application running in port : 8080');
});

module.exports = app;