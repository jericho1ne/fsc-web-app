<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

// header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
// header('Access-Control-Max-Age: 1728000');

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

require_once 'Yelp.php';

$app_id = '-iMrrWHHxOKehsmtQVpV7A';
$app_secret = 'gAScHh8LnCyVv7lM4mYQdyAXUYuWKeT2TvDGdXvlTlRs7pY3ZyQY0Dm5qQjUZUPm';

$yelp = new Yelp($app_id, $app_secret);

function isDecentCoffeeShop($name) {
	$badCoffee = [
		// Mainstream
		'capital one',
		'pain quotidien',
		'starbucks',
		'dunkin donuts',
		'biggby',
		'dunkin\' donuts',
		'coffee bean and tea',
		'coffee bean & tea',
		'peet\'s',
		'caribou',
		'tim horton',
		// Sellouts
		'philz',
		// Other random shit
		'boba',
		'deli',
		'pizzeria',
		'pizza',
		'restaurant',
		'cafe',
		'kitchen',
	];
	
	foreach ($badCoffee as $negativeTerm) {
		if (strpos(strtolower($name), strtolower($negativeTerm)) !== false) {
			return false;
			break;
		}
	}
	// Hey, we got this far.  Must be a decent spot!
	return true;
}

?>
