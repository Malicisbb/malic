var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'inBDPA Login' });
});

router .post('/', function(req, res, next) {
    username+req.body.uesername;
    console.log(username); // test that we have the username filled out 

    //Temporary: 
    res.render('login', {tile: 'inBDPA Login'}