<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

require_once 'Yelp.php';

$app_id = '-iMrrWHHxOKehsmtQVpV7A';
$app_secret = 'p6R0WPIiykKwVOJhgcv3SgsBLPKAhYQCa2i8FbXqUEcH42edQQKydEHYCfMTHYHc_WUtFaA2yOkbsBQ5dvk7rVspyXCwGLNrVnVSCWIMY3hKkcuo_0Lkg1GTmyikWnYx';

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
		'Teavana',
		'philz',
		'eataly',
		// Not really specialty coffee...
		'urth caf',
		'honeymee',
		'boba',
		'deli',
		'pizzeria',
		'pizza',
		'restaurant',
		'kitchen',
		'bakery',
		'cookies',
		'donuts',
		'doughnuts',
		'brunch',
		'coffee seletto',
		// Blacklisted
		'Lollicup',
		'icy rush',
		'street level cafe',
		'sd coffee',
		'moe\'s cafe',
		'vinoteca',
		'splurge',
		'everyday cafe',
		'nespresso',
		'caffe dell',
		'Kerckhoff Coffee House',
		'Study at Hedrick',
	];
	
	foreach ($badCoffee as $negativeTerm) {
		$needle = strtolower($negativeTerm);
		$haystack = strtolower($name);
		if (strpos($haystack, $needle) !== false) {
			return false;
			break;
		}
	}
	// Hey, we got this far.  Must be a decent spot!
	return true;
}
?>
