var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {

	console.log("Got a Get request!");
	// body...

	person1 = {
		name: 'Tim',
		email: 'tim@email.com',
		number: '(111) 111-1111'
	};
	person2 = {
		name: 'Emily',
		email: 'emily@email.com',
		number: '(222) 111-1111'
	};
	person3 = {
		name: 'John',
		email: 'John@email.com',
		number: '(333) 111-1111'
	};
	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");