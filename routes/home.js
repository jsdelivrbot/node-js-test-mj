const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.json({
        message: 'Only Authorized Access'
    });
});

module.exports = app;
