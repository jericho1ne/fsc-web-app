<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$BASE_URL = "https://medium.com/artisanal-coffee/";
$BLOG_URL = "https://blog.findsomecoffee.com/";
$IMG_URL = "https://cdn-images-1.medium.com/max/";
$IMG_SIZE = "1280";

$requestJson = "?format=json";
// echo $BASE_URL . $requestJson;

$data = file_get_contents($BASE_URL . $requestJson);
//print_r($data);
$data = str_replace("])}while(1);</x>", "", $data);

// Does funny stuff, like turn emdash into `â`
//$result = json_decode(utf8_encode($data), true); 
$result = json_decode($data, true); 

if ($data === false || !($result['success'])) {
    print_r(json_encode(["error" => "Sorry, no data."]));
    exit;
} else {
	// Grab posts from JSON tree
	$posts = $result['payload']['references']['Post'];
	
	// Fill in just the info we need
	$blogPosts = [];
	foreach($posts as $post) {
		$blogPosts[] = [
			'id' => $post['id'],
			'url' => $BLOG_URL . $post['uniqueSlug'],
			'title' => $post['title'],
			'description' => $post['content']['subtitle'],
			'img' => $IMG_URL . $IMG_SIZE . '/' . $post['virtuals']['previewImage']['imageId'],
		];
	}
	print_r(json_encode($blogPosts));
}
?>
