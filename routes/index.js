//Get all of club data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
    res.render('home_alternative');
    }
    

exports.populate = function(req, res) {    
	console.log(data);
	res.render('info', data);

 }

exports.findMatch = function(req, res) {    
	console.log(data);
	res.render('match', data);

 }

exports.allEvents = function(req, res) {    
	console.log(data);
	res.render('my', data);

 }

exports.showAll = function(req, res) {    
	console.log(data);
	res.render('club', data);

 }