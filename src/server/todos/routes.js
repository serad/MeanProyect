var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Hello from /Todos');
})

module.exports = router;