const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const nodemailer = require('nodemailer')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))



app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3002;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});