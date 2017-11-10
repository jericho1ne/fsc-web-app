<template>
	<div class="">
		<v-dialog/>

		<span 
			v-show="this.$root.$data.loading " 
			class="fa-icon-xl spinner">
		</span>
		
		<div class="list-group">
			<ul class="items">
				<li v-for="item in this.$root.$data.items" class="item">	
					
					<div class="thumb" 
						v-bind:style="{ backgroundImage: 'url(' + item.image_url + ')' }"
						@click="getItemDetail(item.id)"
					>
						<div class="item-title">
							<h4 class="list-group-item-heading">{{item.name}}</h4>		
							<h5 class="list-group-item-text" v-if="item.review_count">
								{{item.review_count}} reviews
							</h5>
							<h5 class="list-group-item-text" v-if="item.review_count">
								{{item.distance}}
							</h5>
							<div v-if="item.rating">
								<star-rating 
									:star-size="20" 
									:rating="item.rating"
									:show-rating="false"
									:border-width="0"
									:increment="0.1"
									:read-only="true"
								></star-rating>
							 </div>
						</div>
						<div class="thumb-spacer" v-if="item.rating">
						</div>
						<div class="mini-action-bar" v-if="item.rating">
							<!-- //click:deleteItem({{index}}) -->
							<!-- <icon name="bookmark" class="fa-icon-md"></icon>
							<icon name="compass" class="fa-icon-md"></icon>
							<icon name="share-square" class="fa-icon-md"></icon> -->
							<!-- 
							<button class="btn btn-xs btn-danger" v-on="">Delete</button> -->
						</div>
					</div>
					
					

				</li>
			</ul>
		</div>
			
	</div>
</template>

<script>
export default {
	name: 'SearchNearby',
	data () {
		return {
			msg2: '...',
			cityList: [],
			// Blank, just need a placeholder
			item: {},
		} // End return
	},
	created: function () {
		// `this` points to the vue instance
	}, 
	mounted: function () {
		let _self = this;

		// Set spinner
		_self.$root.$data.loading = true;

		_self.$root.getLocation().then(function(position) {
			// Set spinner
			_self.$root.$data.loading = false;

			// Here's our chance to use the cached data
			if (!_self.$root.hasPositionChanged() && _self.$root.$data.length) {
				// already have stuff, just display it
				console.log("Using cached data.")
				return;
			}
			else {
				// Ajax request to places API
				let urlParams = 
					`term='coffee'&` +
					// `categories=coffeeroasteries,coffee&` +
					`lat=${position.latitude}&lon=${position.longitude}&` +
					// List of comma delimited pricing levels (1,2,3,4)
					`price=1,2,3,4&` +
					// defaults to best_match
					// { best_match, rating, review_count, distance }
					`sort_by=distance&` +
					`limit=10`;

				_self.$root.fetchDataFromApi('search', urlParams)
					.then(response => {
						// Set the displayed item to the AJAX response
						if (typeof response.body.businesses === 'object') {
							// Set loading spinner
							_self.$root.$data.loading = false;

							let items = response.body.businesses;
							items = _self.$root.stripCoffeeShops(items);
							
							// Sort based on proximity
							items.sort(function(a, b) {		
								// sort by proximity (closest first)
								return parseFloat(a.distance) - parseFloat(b.distance);
							});

							// Convert meters to miles, customize display value
							items.forEach((item) => {
								let thisFarAway = (item.distance * 0.000621371).toFixed(1);
								item.distance = thisFarAway < 0.1 
									? `* Really Close *`
									: `${thisFarAway} miles away`;

								// Replace the larger original image with a smaller one
								const pattern = /o.jpg/;
								const smaller_img = item.image_url.replace(pattern, 'l.jpg');							
								item.image_url = smaller_img;							
							});

							// Set the reactive property, which auto-triggers display
							_self.$root.$data.items = items;
							
							// Notify prerender SPA plugin
							setTimeout(() => {
								document.dispatchEvent(new Event('custom-post-render-event'))
							}, 3000)
						} else {
							console.warn("No results.");
						}
					}, response => {
						console.warn("Error");
					});
			} // Else else case for no cached business data
		});
	},
	
	methods: {
		getItemDetail: function(itemid) {
			this.$root.getItemDetail(itemid);
		},
		deleteItem: function(index) {
			if(confirm("Are you sure you want to delete this entry?")) {
				// $remove is a Vue convenience method similar to splice
				// this.coffeeshops.$remove(index);        
			}
		},
		beforeOpen (event) {
			// console.log(event.params);
		},
		beforeClose (event) {
			// console.log(event.params);
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	
</style>
