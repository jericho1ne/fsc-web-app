<?php
$LOCATIONS = [
	'LA' => 'Los Angeles',
	'NY' => 'New York', 
	'CHI' => 'Chicago', 
	'HNL' => 'Honolulu', 
	'PAR' => 'Paris', 
	'BER' => 'Berlin',
	'MEL' => 'Melbourne',
];

$PRESETS = [
	'PRICE_LOW' => '1,2',
	'PRICE_HIGH' => '3,4'
];

$DEFAULTS = [
	'CATEGORY_FILTER' => 'coffee',
	'CITY' => $LOCATIONS['LA'],
	'SEARCH_TERMS' => 'cafe or coffee',
	'SEARCH_LIMIT' => 40,
	// METERS (1600 m = 1 mile)
	'RADIUS_FILTER' => 5000,
	// 0=Best matched (default), 1=Distance, 2=Highest Rated
	'SORT' => 1,
];
?>
