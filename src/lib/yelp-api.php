<?php

/**
 * Yelp API v2.0 code sample.
 *
 * This program demonstrates the capability of the Yelp API version 2.0
 * by using the Search API to query for businesses by a search term and location,
 * and the Business API to query additional information about the top result
 * from the search query.
 * 
 * Please refer to http://www.yelp.com/developers/documentation for the API documentation.
 * 
 * This program requires a PHP OAuth2 library, which is included in this branch and can be
 * found here:
 *      http://oauth.googlecode.com/svn/code/php/
 * 
 * Sample usage of the program:
 * `php sample.php --term="bars" --location="San Francisco, CA"`
 */

// Enter the path that the oauth library is in relation to the php file
require_once('oauth.php');

// Set your OAuth credentials here  
// These credentials can be obtained from the 'Manage API Access' page in the
// developers documentation (http://www.yelp.com/developers)
$CONSUMER_KEY       = '7ty_0ozPJN_da2YVf7VFYQ';
$CONSUMER_SECRET    = '9SkSfakVMMP2pFA-ANEML-KnrSU';
$TOKEN              = 'Piei6uvWftTg3SA14PQj1LkUEjpw_EOo';
$TOKEN_SECRET       = '5FNCx8Jr8ebFT79E7BxqV9tglf8';

// Defaults
$API_HOST = 'api.yelp.com';
$DEFAULT_TERM = 'coffee';
$DEFAULT_LOCATION = 'Los Angeles, CA';
$SEARCH_LIMIT = 30;
$SEARCH_PATH = '/v2/search/';
$BUSINESS_PATH = '/v2/business/';


/** 
 * Makes a request to the Yelp API and returns the response
 * 
 * @param    $host    The domain host of the API 
 * @param    $path    The path of the APi after the domain
 * @return   The JSON response from the request      
 */
function request($host, $path) {
    $unsigned_url = "https://" . $host . $path;

    // Token object built using the OAuth library
    $token = new OAuthToken($GLOBALS['TOKEN'], $GLOBALS['TOKEN_SECRET']);

    // Consumer object built using the OAuth library
    $consumer = new OAuthConsumer($GLOBALS['CONSUMER_KEY'], $GLOBALS['CONSUMER_SECRET']);

    // Yelp uses HMAC SHA1 encoding
    $signature_method = new OAuthSignatureMethod_HMAC_SHA1();

    $oauthrequest = OAuthRequest::from_consumer_and_token(
        $consumer, 
        $token, 
        'GET', 
        $unsigned_url
    );
    
    // Sign the request
    $oauthrequest->sign_request($signature_method, $consumer, $token);
    
    // Get the signed URL
    $signed_url = $oauthrequest->to_url();
    
    // Send Yelp API Call
    try {
        $ch = curl_init($signed_url);
        if (FALSE === $ch)
            throw new Exception('Failed to initialize');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $data = curl_exec($ch);

        if (FALSE === $data)
            throw new Exception(curl_error($ch), curl_errno($ch));
        $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if (200 != $http_status)
            throw new Exception($data, $http_status);

        curl_close($ch);
    } 
    catch(Exception $e) {
        // Curl error, pass on the message intact, deal with it later
        $data = $e->getMessage();
    }
    
    return $data;
}

/**
 * Query the Search API by a search term and location 
 * 
 * @param    $term        The search term passed to the API 
 * @param    $location    The search location passed to the API 
 * @return   The JSON response from the request 
 */
function search($term, $location) {
    $url_params = [
        'term' => $term,
        'location' => $location 
    ];

    // TODO: consider allowing user to select up to 10-20 results
    // plus add in other search params (cross referencing Yelp results w/ our db)
    $url_params['limit'] = $GLOBALS['SEARCH_LIMIT'];
    $search_path = $GLOBALS['SEARCH_PATH'] . "?" . http_build_query($url_params);
    
    return request($GLOBALS['API_HOST'], $search_path);
}

/**
 * Query the Business API by business_id
 * 
 * @param    $business_id    The ID of the business to query
 * @return   The JSON response from the request 
 */
function get_business($business_id) {
    $business_path = $GLOBALS['BUSINESS_PATH'] . urlencode($business_id);
    
    return request($GLOBALS['API_HOST'], $business_path);
}

function stripBizDetails($biz) {
    // Save certain things
    $biz['coordinates'] = $biz['location']['coordinate'];
    //$biz['user_image_url'] = $biz['reviews']['user']['image_url'];

    // Kill the rest
    $unsetVars = [
        'is_claimed',
        'menu_date_updated',
        'rating_img_url_large',
        'location',
        'snippet_text',
        'menu_provider',
        'mobile_url',
        'categories',
        'phone',
        'rating_img_url',
        'rating_img_url_small',
        'snippet_image_url',
    ];

    foreach($unsetVars as $v) {
         unset($biz[$v]);
    }

    return $biz;
}

/**
 * Queries the API by the input values from the user 
 * 
 * @param    $term        The search term to query
 * @param    $location    The location of the business to query
 */
function query_yelp_api($term, $location) {     
    $responseRaw = search($term, $location);
    $responseDecoded = json_decode($responseRaw, true);

    if (array_key_exists('error', $responseDecoded)) {
        $response = ['error' => $responseDecoded['error']];
    }
    else {
        $resultCount = count($responseDecoded['businesses']);

        $trimmedDataset = [];
        // $responseDecoded['total'];
        foreach ($responseDecoded['businesses'] as $biz) {
            $trimmedDataset[] = stripBizDetails($biz);
        }

        // also have
        // $responseDecoded['region']['span'];
        // $responseDecoded['region']['center'];    
        
        $response = [
            'count' => $resultCount,
            'results' => $trimmedDataset,
        ];
    }
    return $response;
}
?>
