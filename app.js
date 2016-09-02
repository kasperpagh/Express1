/**
 * Created by kasper on 02-09-2016.
 */


var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    res.send("Hello, express!");
});

app.listen(8080);