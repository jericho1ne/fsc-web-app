<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$BASE_URL = "https://www.juicer.io/api/feeds/findsomecoffee";
$data = file_get_contents($BASE_URL);
// Does funny stuff, like turn emdash into `â`
//$result = json_decode(utf8_encode($data), true); 
$result = json_decode($data, true); 

if ($data === false || !($result['posts'])) {
    print_r(json_encode(["error" => "Sorry, no data."]));
    exit;
} else {
	// Grab posts from JSON tree
	$posts = $result['posts']['items'];
	
	// Fill in just the info we need
	$feedItems = [];
	foreach($posts as $post) {
		// Break out position into lat/lon array
		$position = explode(',', $post['location']);
		// Remove any extra referral thingy at end of post url, if `?` exists
		$questionMarkPos = strpos($post['full_url'], '?');
		
		if ($questionMarkPos) {
			$url = substr($post['full_url'], 0, $questionMarkPos);
		} else {
			$url = $post['full_url'];
		}		
		$feedItems[] = [
			'id' 			=> $post['id'],
			'url' 			=> $url,
			// 'title'			=> $post['title'],
			'description' 	=> $post['unformatted_message'],
			'location'		=> [
				trim($position[0]),
				trim($position[1])
			],
			'img' 			=> $post['image'],
			'extra_imgs' 	=> $post['additional_photos'],
		];
	}
	print_r(json_encode($feedItems));
}
?>
