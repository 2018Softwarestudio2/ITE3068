'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
var router = require('./router/main')(app);
var database = require('./router/mysql');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(PORT, function(){
    console.log("Express server has started on port 3000")
});
app.use(express.static('public'));

