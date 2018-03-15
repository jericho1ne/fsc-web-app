<?php
require_once '../lib/common.php';

// echo "<pre>"; print_r($_GET); echo "</pre>";

$searchParams = [
	'term' => 'coffee',
	'categories' => 'coffeeroasteries,coffee',
	'location' => $_GET['location'],
	'latitude' => $_GET['lat'],
	'longitude' => $_GET['lon'],
	'price' => $_GET['price'],
	'sort_by' => $_GET['sort_by'],
	'limit' => $_GET['limit'],
	'fieldset' => $_GET['fieldset'],
];
 
$testParams = [
    // 'location' => 'santa monica ca',
    'location' => 'los-angeles-90095',

//	'longitude' => '-118.495155',
//	'latitude' => '34.012638',

	// Westwood
//	'longitude' => '-118.443709',
//	'latitude' => '34.0058790',
	
	'price' => '1,2,3,4', 
	'limit' => '30',
	'fieldset' => 'light',
];

/********** DEBUG *********/
// $searchParams = $testParams;
/********** END DEBUG *****/

if (!isset($searchParams['limit']) || $searchParams['limit'] == '') {
	$searchParams['limit'] = 40;
}

/**************** DEBUG *******************/
//echo "<pre>"; print_r($searchParams); echo "</pre>";
/**************** END DEBUG ***************/

$data = $yelp->search($searchParams);
$allCoffeeShops = $data['businesses'];

// Go through and "trim the fat"
$decentCoffeeShops = [];
foreach ($allCoffeeShops as $v) {
	if ($v['rating'] > 3.5 && isDecentCoffeeShop($v['name'])) {
		if ($searchParams['fieldset'] != 'light') {
			$reviews = $yelp->reviews($v['id']);
			$v['reviews'] = $reviews['reviews'];
		}
		unset($v['categories']);
		unset($v['transactions']);
		$v['url'] = substr($v['url'], 0, strpos($v['url'], '?'));
		$decentCoffeeShops[] = $v;
	} 
}

/************  DEBUG *******************/ 
//foreach($allCoffeeShops as $single) {
//	print_r($single['name'] . "\r\n");
//}
//print_r("=======================\r\n");
//foreach($decentCoffeeShops as $single) {
//	print_r($single['name'] . "\r\n");
//}
/************* END DEBUG **************/ 

if ($data === false) {
    print_r(json_encode($yelp->get_error()));
    exit;
}
print_r(json_encode($decentCoffeeShops, true));
?>
