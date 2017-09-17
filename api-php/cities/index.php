<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

$cities = [
	[ 
		'name' => 'Seattle',
		'display' => 'Seattle',
		'state' => 'WA',
	],
	[ 
		'name' => 'Portland',
		'display' => 'Portland',
		'state' => 'OR',
	],
	[ 
		'name' => 'San Francisco',
		'display' => 'San Francisco',
		'state' => 'CA',
	],
	[ 
		'name' => 'Santa Barbara',
		'display' => 'Santa Barbara',
		'state' => 'CA',
	],
	[ 
		'name' => 'Santa Monica',
		'display' => 'Santa Monica',
		'state' => 'CA',
	],
	[ 
		'name' => 'Los Angeles',
		'display' => 'LA',
		'state' => 'CA',
	],
	[ 
		'name' => 'Culver City',
		'display' => 'Culver City',
		'state' => 'CA',
	],
	[ 
		'name' => 'Mission Viejo',
		'display' => 'Mission Viejo',
		'state' => 'CA',
	],
	[ 
		'name' => 'San Diego',
		'display' => 'San Diego',
		'state' => 'CA',
	],
	[ 
		'name' => 'East Lansing',
		'display' => 'East Lansing',
		'state' => 'MI',
	],
	[ 
		'name' => 'Chicago',
		'display' => 'CHI',
		'state' => 'IL',
	],
	[ 
		'name' => 'New York',
		'display' => 'NYC',
		'state' => 'NY',
	],
	[ 
		'name' => 'Melbourne',
		'display' => 'Melbourne',
		'state' => 'VIC',
	],
	[ 
		'name' => 'Sydney',
		'display' => 'Sydney',
		'state' => 'NSW',
	],
];

print_r(json_encode($cities));

?>
