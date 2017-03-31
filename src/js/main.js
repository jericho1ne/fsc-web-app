/**
 * Pull in a reusable HTML template for each item, clone it and fill it with 
 * the incoming data
 * @param  {array} 	bikes - Array of objects
 * @param  {string} targetElement - Id of where this will get loaded into
 */
function loadDataIntoTemplate(items, targetElement) {
	console.log(" loadDataIntoTemplate called ");
	// Load html template, then inject data into cloned containers
	$('#item-thumb-template')
		.load('templates/item-thumb.html', function(){
			// Then fill in the bike data with the ajax response payload
			loadItems(items, targetElement);
		})
		.then(function() {
			console.log('ok whats next');
		});
} // End loadBikesIntoTemplate()

/**
 * Loads given array's content into the specific dom selector
 * @param  {array} 	items - Array of item objects
 * @param  {string} targetElement - Div selector where this will get loaded into
 */
function loadItems(items, targetElement) {
	console.log(" loadItems called ");
	
	// Append incoming data to DOM (fields below)
	// 
	// 	 Make, Model, Year, Notes, Photos
	//   Color, Country, Display, Gearing
	//   Price, Size, Style, Use, Wheelsize
	//   
	var item = '';

	for (var i = 0; i < items.length; i++) {		
		item = items[i];

		// Create a unique element id to reference the element by
		var itemId = items[i]['id'];

		console.log(itemId);
		
		$('#item-template')
			.clone()
			.removeClass('hidden')
			.attr('data-itemid', items[i]['Id'])
			.attr('id', itemId)
			.appendTo(targetElement);

		// Change attributes of the most recent dynamically created element
		$(targetElement + ' #' + itemId)
			.find('#photo-main')
			.attr('src', item.image_url);

		// name
		// rating
			// is_closed order by "open" vs "closed" status

		$(targetElement + ' #' + itemId).find('.portfolio-caption .name')
			.removeClass('loading')
			.html(item.name);

		$(targetElement + ' #' + itemId).find('.portfolio-caption .rating')
			.removeClass('loading')
			.html(item.rating);

		// $(targetElement + ' #' + itemId).find('.portfolio-caption .bike-price')
		// 	.removeClass('loading')
		// 	.html(bike.Price);
	} // End for loop through all bike items

	// If detail modal is clicked, need to load custom data
	$('.portfolio-item').on('click', function() {
		// Search for item id in the global array 
		debugger;	

		/*
		var bike = window.bikes.pluckIfKeyValueExists('Id', $(this).data('itemId'))[0];

		$("#bikeDetails #bike-title").html(bike.Make + ' ' + bike.Model);
		$("#bikeDetails #bike-subtitle").html(bike.Price);
		$("#bikeDetails #bike-image").attr('src', bike.Photos[0]);
		$("#bikeDetails #bike-notes").html(bike.Notes);

		// Details list items
		$("#bikeDetails #bike-use").html(bike.Use);
		$("#bikeDetails #bike-wheelsize").html(bike.Wheelsize);
		$("#bikeDetails #bike-color").html(bike.Color);
		$("#bikeDetails #bike-country").html(bike.Country);
		*/
	}); 	

	$('#coffeeShops').toggleClass('loading', false);
	$('.intro-heading').html('Nearby stuff: ');
}
