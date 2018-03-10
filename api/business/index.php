<?php
require_once '../lib/common.php';

$bizId = !empty($_GET['business']) 
	? $_GET['business'] 
	: '';

// Test with default biz id
// $bizId = 'strange-matter-coffee-lansing-2';

$business = $yelp->business($bizId);
$reviews = $yelp->reviews($bizId);

if ($business === false) {
    print_r(json_encode($yelp->get_error()));
    exit;
}
print_r(json_encode(array_merge($business, $reviews)));

?>
