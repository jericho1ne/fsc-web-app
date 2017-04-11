// https://github.com/joshuaslate/node-yelp-api
const Yelp = require('node-yelp-api-v3')
const express = require('express')
const cors = require('cors');

// Node web application framework
let app = express()
 
let yelp = new Yelp({
  consumer_key: '-iMrrWHHxOKehsmtQVpV7A',
  consumer_secret: 'gAScHh8LnCyVv7lM4mYQdyAXUYuWKeT2TvDGdXvlTlRs7pY3ZyQY0Dm5qQjUZUPm'
})

/*
	var debugParams = {
		term: 'coffee',
		//location: '90401', 
		longitude: parseFloat(-118.495155),
		latitude: parseFloat(34.012638),
		price: '1,2', 
		limit: 2
	}
*/

let portNumber = 3001;

// Enable All CORS Requests
app.use(cors())

// ?term=coffee&lon=-118.495155&lat=34.012638&price=1,2&limit=10
app.get('/search', function(request, response) {
	let query = request.query;

	let params = {
		term: query.term,
		//location: '90401', 
		longitude: parseFloat(query.lon),
		latitude: parseFloat(query.lat),
		price: query.price, 
		limit: parseInt(query.limit)
	};
	console.log(' *** params ***');
	console.log(params);

	yelp.searchBusiness(params)
		.then((results) => {
			console.log(' * Results in browser *');
			// Pass along the response payload directly	
			response.json(results)
		})
		.catch(function (err) {
			console.log(' *** Error ***');
		    console.error(err);
		});

}).listen(portNumber)

console.log("Server running at http://localhost:" + portNumber + "/");

