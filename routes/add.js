var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
    res.render('add', data);
    
 }