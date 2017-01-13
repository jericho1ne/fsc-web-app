<?php
require_once('lib/common.php');
require_once('lib/yelp-api.php');

/**
 * Handle UI request 
 */

// pr($_GET);

// Set to incoming posted vars, or set to default 
$city = set($_GET['city']) ?: $GLOBALS['DEFAULT_LOCATION'];
$term = set($_GET['term']) ?: $GLOBALS['DEFAULT_TERM'];


query_yelp_api($term, $city);

?>
