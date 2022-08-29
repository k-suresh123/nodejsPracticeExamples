'use strict';

var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.get('/person/:id', function(req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});
	
	app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank you!');

		console.log(req.body);

		var con = mysql.createConnection({
				host: "localhost",
				user: "root",
				password: "root",
				database: "db1",
				port: 3306
		});
  		let peopleID, addressID;
		con.connect(function(err) {
		 if (err) throw err;
		  console.log("Connected!");
		  var sql = "INSERT INTO People (Firstname, Lastname) VALUES ('"+req.body.firstname+"','"+  req.body.lastname+ "' )";
		  
		  var addresssesSQL = "INSERT INTO Addresses (Address) VALUES ('"+req.body.address+ "' )";

		  console.log(sql);
		  con.query(sql, function (err, result) {
			     console.log(`add: ${result}`)
			  //	console.log(result.insertId);
			  	peopleID = result.insertId;

			    if (err) throw err;

			  	con.query(addresssesSQL, function (err, result1) {
				  	console.log(result1);
				  	console.log(result1.insertId);
				  	addressID = result1.insertId;

				    if (err) throw err;

			  
					 var peopleAddresssMappingSQL = "INSERT INTO PersonAddresses (PersonID, AddressID) VALUES ('"+peopleID+"' , '"+  addressID+ "' )";
					console.log(peopleAddresssMappingSQL);
					con.query(peopleAddresssMappingSQL, function (err, result2) {
						console.log(result2);
					    if (err) throw err;
					});

			});
		  });

		});

		// console.log(con);

	});

	
}