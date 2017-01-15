<?php
require_once('lib/common.php');
require_once('lib/yelp-api.php');

/**
 * Handle UI request 
 * 
 * Set to incoming posted vars, or set to default 
 */
$city = set($_POST['city']) ?: $GLOBALS['DEFAULT_LOCATION'];
$term = set($_POST['term']) ?: $GLOBALS['DEFAULT_TERM'];

echo json_encode(query_yelp_api($term, $city));
?>
