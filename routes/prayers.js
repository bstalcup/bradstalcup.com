var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {

  var db = req.db;
    var collection = db.get('prayercollection');
    collection.find({},{},function(e,docs){
	res.json(docs);
        //res.render('userlist', {
        //    "userlist" : docs
        //});
    });

//  res.json(response);
});

module.exports = router;
