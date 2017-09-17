<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

require_once '../lib/Yelp.php';

$app_id = '-iMrrWHHxOKehsmtQVpV7A';
$app_secret = 'gAScHh8LnCyVv7lM4mYQdyAXUYuWKeT2TvDGdXvlTlRs7pY3ZyQY0Dm5qQjUZUPm';

$yelp = new Yelp($app_id, $app_secret);

// echo "<pre>";
// print_r($_GET);
// echo "</pre>";

$searchParams = [
	'term' => $_GET['term'],
	'location' => $_GET['location'],
	'latitude' => $_GET['lat'],
	'longitude' => $_GET['lon'],
	'price' => $_GET['price'],
	'sort_by' => $_GET['sort_by'],
	'limit' => $_GET['limit'],
];

// echo "<pre>";
// print_r($searchParams);
// echo "</pre>";

$testParams = [
    'term' => 'coffee',
    // 'location' => 'santa monica ca',
    // 'location' => '90401'
    'longitude' => '-118.495155',
	'latitude' => '34.012638',
	'price' => '1,2', 
    'limit' => '3',
];

$businesses = $yelp->search($searchParams);

if ($businesess === false) {
    print_r(json_encode($yelp->get_error()));
    exit;
}
print_r(json_encode($businesses));

?>
