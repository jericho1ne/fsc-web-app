<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Find a place with decent coffee and wifi. And tables.">
	<meta name="author" content="FindSomeCoffee">

	<title>Find Some Coffee</title>

	 <!-- Bootstrap Core CSS -->
	<!-- <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->

	<!-- Custom Fonts -->
	<!-- <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"> -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Hind|Libre+Franklin|Oswald" rel="stylesheet"> -->

	<!-- Theme CSS -->
	<!-- <link href="css/agency.min.css" rel="stylesheet"> -->

	<!-- Renova Bikes Custom CSS -->
	<!-- <link href="css/main.css" rel="stylesheet"> -->
	<!-- <link href="css/custom-inputs.css" rel="stylesheet"> -->
	<!-- <link href="css/datatables.css" rel="stylesheet"> -->
</head>


<body>
	<!-- Navigation -->
	<nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">
				<a class="navbar-brand" href="index.html">Go Back</a>
			</div>
		</div>
	</nav>
	<!-- Header -->
	<div class="container herotext pad-top-50">
		<div class="row intro-text">
			<div class="col-lg-12 text-center intro-heading">Find you some coffee, yeah?</div>
		</div>
	</div>

	<!-- Data -->
	<div class="container pad-top-50">
		<div class="row">
			<div id="coffeeShops" 
				class="col-lg-12"> ...
			</div>
		</div>
	</div>


<!-- jQuery -->
<script src="js/jquery.min.js"></script>
<script src="js/main.js"></script>

<!-- Required logic -->
<script type="text/javascript" src="js/common.js"></script>

<!-- Bootstrap Core JavaScript -->
<!-- <script src="vendor/bootstrap/js/bootstrap.min.js"></script> -->

<!-- Bootstrap Theme JavaScript -->
<!-- <script src="js/agency.min.js"></script> -->
</body>

<script>
$(document).ready(function() {

	window.businesses = [];

	// // Load bootstrap modal into DOM
	// $('#modal-temp')
	// 	.load('templates/detail-modal.html', function() {
	// 		// Callback that immediately fires after the load is completed
	// 	});
	// 	
	/**
	 * Generic call that sets interaction listeners
	 */
	function setListeners() {
		$('#thing').on('click', function() {
			// var inseam = parseInt($('#inseam-dropdown').val());
			//do stuff
		});
	}


	// Pass in relevant parameters
	var postData = {
		'city': 'Santa Monica, CA' 
	};

	makeAjaxRequest(postData, 'POST', 'getCoffeeShops.php')
		.then(function(response) {
			// If response was received
			if (response.success) {
				debugger;

				// Clear target div
				$('#coffeeShops').empty();
				
				// Make bike data global object, import template and clone it
				window.businesses = response.payload;
				loadCoffeeShopsIntoTemplate(window.businesses, '#coffeeShops');
			}	
			// Else, surface the error message
			else {
				console.warn('Uh oh.');
				debugger;
				// $('#errorDiv').html(response.message);
			}
		})
		.then(function(data) {
			// Generate bike use options
			generateStuff(window.businesses, "#somethingContainer");

			// Set click listeners and such
			setListeners();
		});

}); // End document.ready
</script>

</html>