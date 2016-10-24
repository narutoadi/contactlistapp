var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
//var db = mongojs['contactlist', ['contactlist']];
var db

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {

	console.log("Got a Get request!");
	// body...

	MongoClient.connect('mongodb://127.0.0.1:27017/contactlist', function (err, xdb) {

		if(err){
			throw err;
		}
		
		db=xdb

		xdb.collection('contactlist').find().toArray(function (err, result) {
			// body...
			if(err) {
				throw err;
			}
			console.log(result);
			res.json(result);
		});

		// body...
	});
});

app.post('/contactlist',function (req, res) {
	console.log(req.body);

	db.collection('contactlist').save(req.body, function(err, result){

		if(err) return console.log(err)

		res.json(req.body);
		console.log('saved to database')
	});
	// body...
});

app.delete('/contactlist/:id', function(req, res){

	var id = req.params.id;
	var objId = new ObjectID(id);
	console.log(id);
	db.collection('contactlist').deleteOne({_id : objId}, function(err, result){

		if(err) return console.log(err);

		console.log('deleted');
		res.json(result);

	});
});

app.get('/contactlist/:id', function(req, res){
	var id=req.params.id;
	var objId = new ObjectID(id);
	console.log(id);
	db.collection('contactlist').findOne({_id: objId}, function(err, result){
		res.json(result);

	});

});
app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
	var objId = new ObjectID(id);
	console.log(req.body.name);
	db.collection('contactlist').updateOne({_id: objId}, { $set: {name: req.body.name, email: req.body.email, number: req.body.number} }, function(err, result){
		console.log('updated');
		res.json(result);

	});
});
app.listen(3000);
console.log("Server running on port 3000");