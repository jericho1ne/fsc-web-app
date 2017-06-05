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


// API endpoints
app
	/**
	 * :search
	 * 
	 * Returns a list of nearby coffee shops
	 * URL example: ?term=coffee&lon=-118.495155&lat=34.012638&price=1,2&
	 * 	sort_by=distance&limit=10
	 * @param term (eg: coffee)
	 * @param location Either city/province or zip
	 * @param lat If location not filled in lat/lon required instead 
	 * @param lon Same as above
	 * @param sort_by Order the dataset
	 * @param [price] One or more of the following price ranges: 1,2,3,4
	 * @param [limit]  
	 * @return Nearby coffee shops, nearest first
	 */
	.get('/search', function(request, response) {
		let query = request.query;

		let params = {
			term: query.term,
			location: query.location, 
			longitude: parseFloat(query.lon),
			latitude: parseFloat(query.lat),
			price: query.price, 
			sort_by: query.sort_by,
			limit: parseInt(query.limit)
		};
		/*
			console.log(" >> app.get << ")
			console.log(' *** query ***');
			console.log(params);
			console.log(' *** params ***');
			console.log(params);
		*/
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

	})
	/**
	 * :cities
	 * 
	 * Returns a list of preset major cities
	 * @return City array
	 */
	.get('/cities', function(request, response) {
		let cities = [
			{ 
				name: 'Seattle',
				display: 'Seattle',
				state: 'WA',
			},
			{ 
				name: 'Portland',
				display: 'Portland',
				state: 'OR',
			},
			{ 
				name: 'San Francisco',
				display: 'San Francisco',
				state: 'CA',
			},
			{ 
				name: 'Santa Barbara',
				display: 'Santa Barbara',
				state: 'CA',
			},
			{ 
				name: 'Santa Monica',
				display: 'Santa Monica',
				state: 'CA',
			},
			{ 
				name: 'Los Angeles',
				display: 'LA',
				state: 'CA',
			},
			{ 
				name: 'Culver City',
				display: 'Culver City',
				state: 'CA',
			},
			{ 
				name: 'Mission Viejo',
				display: 'Mission Viejo',
				state: 'CA',
			},
			{ 
				name: 'San Diego',
				display: 'San Diego',
				state: 'CA',
			},
			{ 
				name: 'East Lansing',
				display: 'East Lansing',
				state: 'MI',
			},
			{ 
				name: 'Chicago',
				display: 'CHI',
				state: 'IL',
			},
			{ 
				name: 'New York',
				display: 'NYC',
				state: 'NY',
			},
			{ 
				name: 'Melbourne',
				display: 'Melbourne',
				state: 'VIC',
			},
			{ 
				name: 'Sydney',
				display: 'Sydney',
				state: 'NSW',
			},
		];
		response.json(cities);
	})
	// Listen for incoming requests
	.listen(portNumber);

console.log("Server running at http://localhost:" + portNumber + "/");

