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

exports.showInfo = function(req, res){
	console.log(data);
    res.render('club2', data);
 }

 exports.showData = function(req, res){
 	console.log(data);
	res.render('club3', data);
}

exports.showClub = function(req, res){
    console.log(data);
	res.render('club4', data);
}
exports.showClubs = function(req, res){
    console.log(data);
	res.render('club5', data);
}

exports.showEvery = function(req, res){
	console.log(data);
	res.render('club6', data);

}

exports.addClub = function(req, res) {    

	var newClub = {
    	"name": req.query.name,
    	"description": req.query.description,
    	"imageURL": req.query.imageURL,
    	"president": req.query.president,
    	"vp": req.query.vp,
    	"website": req.query.website,
    	"URL": 'add'
    };
    data["clubs"].push(newClub);
    console.log(data);
    res.render('add', data);
    

    }

