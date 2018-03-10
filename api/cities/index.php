<?php 
require_once '../lib/common.php';

$cities = [
	[ 
		'name' => 'Amsterdam',
		'display' => 'AMS',
		'country' => 'Netherlands',
	],

	// [ 
	// 	'name' => 'Santa Monica',
	// 	'display' => 'Santa Monica',
	// 	'state' => 'CA',
	// ],
	
	[ 
		'name' => 'Chicago',
		'display' => 'CHI',
		'state' => 'IL',
	],
	
	[ 
		'name' => 'Honolulu',
		'display' => 'HNL',
		'state' => 'HI',
	],

	[ 
		'name' => 'Houston',
		'display' => 'HOU',
		'state' => 'TX',
	],

	// [ 
	// 	'name' => 'Kansas City',
	// 	'display' => 'MCI',
	// 	'state' => 'MO',
	// ],

	// [ 
	// 	'name' => 'Lansing',
	// 	'display' => 'LAN',
	// 	'state' => 'MI',
	// ],

	[ 
		'name' => 'Los Angeles',
		'display' => 'LAX',
		'state' => 'CA',
	],

	[ 
		'name' => 'Louisville',
		'display' => 'SDF',
		'state' => 'KY',
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
		'name' => 'New Orleans',
		'display' => 'MSY',
		'state' => 'LA',
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
		'name' => 'Portland',
		'display' => 'PDX',
		'state' => 'OR',
	],

	// [ 
	// 	'name' => 'Providence',
	// 	'display' => 'PVD',
	// 	'state' => 'RI',
	// ],

	// [ 
	// 	'name' => 'Santa Barbara',
	// 	'display' => 'SBA',
	// 	'state' => 'CA',
	// ],

	[ 
		'name' => 'San Francisco',
		'display' => 'SFO',
		'state' => 'CA',
	],

	[ 
		'name' => 'Seattle',
		'display' => 'SEA',
		'state' => 'WA',
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
	[ 
		'name' => 'Montreal',
		'display' => 'MTL',
		'state' => 'QC',
		'country' => 'Canada'
	],

	[ 
		'name' => 'Toronto',
		'display' => 'YYZ',
		'state' => 'ON',
		'country' => 'Canada'
	],

	[ 
		'name' => 'Melbourne',
		'display' => 'MEL',
		'state' => 'VIC',
		'country' => 'Australia',
	],

	
	[ 
		'name' => 'Sydney',
		'display' => 'SYD',
		'state' => 'NSW',
		'country' => 'Australia',
	],

	[ 
		'name' => 'Rome',
		'display' => 'FCO',
		'country' => 'Italy',
	],

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
	
];

print_r(json_encode($cities));
?>
