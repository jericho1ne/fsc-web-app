<?php
require_once('globals.php');
require_once('lib/common.php');
require_once('lib/yelp-api.php');

// Set CORS headers options for local testing purposes
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: x-requested-with');
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Max-Age: 604800');

/**
 * Handle UI request 
 * Set to incoming posted vars, or set to default 
 */

$params = [
	'debug' => isset($_GET['debug']) ? $_GET['debug'] : false,

	'city' => isset($_GET['city']) ? $_GET['city'] : $DEFAULTS['CITY'],
	'term' => isset($_GET['term']) ? $_GET['term'] : $DEFAULTS['SEARCH_TERMS'],
	'limit' => isset($_GET['limit']) ? $_GET['limit'] : $DEFAULTS['SEARCH_LIMIT'],

	'category' => isset($_GET['category']) ? $_GET['category'] : $DEFAULTS['CATEGORY_FILTER'],


    // in Meters; 1600 = 1mi, 3200 = 2mi, 8000m = 5mi, 16000m = 10mi
	'radius' => isset($_GET['radius']) ? $_GET['radius'] : $DEFAULTS['RADIUS_FILTER'],
		
	// 0 = Best matched (default) 
	// 1 = Distance
	// 2 = Highest Rated
	'sort' => isset($_GET['sort']) ? $_GET['sort'] : $DEFAULTS['SORT'],

	// TODO
	// category_filter	string	optional
	// deals_filter	bool	optional
];



echo json_encode(query_yelp_api($params));
?>
