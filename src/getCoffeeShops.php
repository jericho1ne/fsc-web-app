<?php
require_once('lib/common.php');
require_once('lib/yelp-api.php');

// Set CORS headers options for local testing purposes
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: x-requested-with');
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Max-Age: 604800');

/**
 * Handle UI request 
 * 
 * Set to incoming posted vars, or set to default 
 */
$city = set($_POST['city']) ?: $GLOBALS['DEFAULT_LOCATION'];
$term = set($_POST['term']) ?: $GLOBALS['DEFAULT_TERM'];

echo json_encode(query_yelp_api($term, $city));
?>
