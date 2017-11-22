<?php
require_once '../lib/common.php';

// echo "<pre>"; print_r($_GET); echo "</pre>";

$searchParams = [
	'term' => $_GET['term'],
	'location' => $_GET['location'],
	'latitude' => $_GET['lat'],
	'longitude' => $_GET['lon'],
	'price' => $_GET['price'],
	'sort_by' => $_GET['sort_by'],
	'limit' => $_GET['limit'],
];

// echo "<pre>"; print_r($searchParams); echo "</pre>";

$testParams = [
    'term' => 'coffee',
    // 'location' => 'santa monica ca',
    // 'location' => '90401'
    'longitude' => '-118.495155',
	'latitude' => '34.012638',
	'price' => '1,2,3,4', 
    'limit' => '30',
];

$data = $yelp->search($searchParams);

$allCoffeeShops = $data['businesses'];

$decentCoffeeShops = [];
foreach ($allCoffeeShops as $v) {
	if ($v['rating'] > 3.5 && isDecentCoffeeShop($v['name'])) {
		$decentCoffeeShops[] = $v;
	} 
}

// Returned object instead of array when a bad coffee shop was encountered (?)
// $decentCoffeeShops = array_filter($allCoffeeShops, function($v) { return isDecentCoffeeShop($v['name']); });

if ($data === false) {
    print_r(json_encode($yelp->get_error()));
    exit;
}
print_r(json_encode($decentCoffeeShops, true));
?>
