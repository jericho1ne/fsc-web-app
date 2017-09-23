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
?>
