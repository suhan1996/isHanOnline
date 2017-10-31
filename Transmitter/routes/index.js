var express = require('express');
var router = express.Router();

/* GET home page. */
const db = require("../db");

const mongoose = require('mongoose');
const Boom = mongoose.model('Boom');
const Bonus = mongoose.model('Bonus');

var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var url = "mongodb://suhan1996:112496@ds241895.mlab.com:41895/time";



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/database', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        //var query = { address: "Park Lane 38" };
        var query = {};
        db.collection("time").find({}).toArray(function(err, result) {
            if (err) throw err;
            var num = result.length;
            var now = Date.now();
            var rst = now - result[num-1].data;
            db.close();
            var rtn = "Yes";
            if(rst>200000){
                rtn = "No";
            }
           // res.send(rtn);
            res.render("index",{"rtn":rtn});
        });
    });
});

module.exports = router;