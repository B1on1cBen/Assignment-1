var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	var query = {name: /^B/};
	
	dbObj.collection("games").deleteMany(query , function(error, response) {
		if(error) throw error;		
		console.log(res.result.n + " documents deleted");			
		db.close();
	});

});