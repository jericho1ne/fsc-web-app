<?php 
// require_once '../lib/common.php';

$cities = [
	[ 
		'name' => 'Seattle',
		'display' => 'SEA',
		'state' => 'WA',
	],
	[ 
		'name' => 'Portland',
		'display' => 'PDX',
		'state' => 'OR',
	],
	[ 
		'name' => 'Providence',
		'display' => 'PVD',
		'state' => 'RI',
	],
	[ 
		'name' => 'San Francisco',
		'display' => 'SFO',
		'state' => 'CA',
	],
	[ 
		'name' => 'Santa Barbara',
		'display' => 'SBA',
		'state' => 'CA',
	],
	[ 
		'name' => 'Houston',
		'display' => 'HOU',
		'state' => 'TX',
	],
	[ 
		'name' => 'New Orleans',
		'display' => 'MSY',
		'state' => 'LA',
	],
	// [ 
	// 	'name' => 'Santa Monica',
	// 	'display' => 'Santa Monica',
	// 	'state' => 'CA',
	// ],
	[ 
		'name' => 'Kansas City',
		'display' => 'MCI',
		'state' => 'MO',
	],
	[ 
		'name' => 'Louisville',
		'display' => 'SDF',
		'state' => 'KY',
	],
	[ 
		'name' => 'Los Angeles',
		'display' => 'LAX',
		'state' => 'CA',
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
		'name' => 'Philadelphia',
		'display' => 'PHL',
		'state' => 'PA',
	],
	[ 
		'name' => 'Honolulu',
		'display' => 'HNL',
		'state' => 'HI',
	],
	[ 
		'name' => 'Minneapolis-St Paul',
		'display' => 'MSP',
		'state' => 'MN',
	],
	[ 
		'name' => 'Nashville',
		'display' => 'BNA',
		'state' => 'TN',
	],
	[ 
		'name' => 'Atlanta',
		'display' => 'ATL',
		'state' => 'GA',
	],
	// [ 
	// 	'name' => 'Culver City',
	// 	'display' => 'Culver City',
	// 	'state' => 'CA',
	// ],
	// [ 
	// 	'name' => 'Mission Viejo',
	// 	'display' => 'Mission Viejo',
	// 	'state' => 'CA',
	// ],
	// [ 
	// 	'name' => 'East Lansing',
	// 	'display' => 'EL',
	// 	'state' => 'MI',
	// ],
	[ 
		'name' => 'Taipei',
		'display' => 'TPE',
		'country' => 'Taiwan',
	],
	[ 
		'name' => 'Vienna',
		'display' => 'VIE',
		'country' => 'Austria',
	],
	[ 
		'name' => 'Rome',
		'display' => 'FCO',
		'country' => 'Italy',
	],
	// [ 
	// 	'name' => 'Havana',
	// 	'display' => 'HAV',
	// 	'country' => 'Cuba',
	// ],
	[ 
		'name' => 'Melbourne',
		'display' => 'MEL',
		'state' => 'VIC',
		'country' => 'AUS',
	],
	[ 
		'name' => 'Sydney',
		'display' => 'SYD',
		'state' => 'NSW',
		'country' => 'AUS',
	],
];

print_r(json_encode($cities));

?>
