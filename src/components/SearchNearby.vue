<template>
	<div class="">
		<v-dialog/>

		<span 
			v-show="this.$root.$data.loading " 
			class="fa-icon-xl spinner">
		</span>
		
		<div class="list-group">
			<ul class="items">
				<li v-for="item in items" class="item">	
					
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
									:star-size="24" 
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
							<!-- <icon name="bookmark" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="compass" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="share-square" class="fa-icon-md" style="fill:#fff"></icon> -->
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
			position: {
				coords: {},
				lat: '',
				lon: '',
			},
			msg2: '...',
			cityList: [],
			// Set up dummy array of coffeeshops
			items: [
				{ name: 'Searching Nearby ...', rating: '', review_count: '' },
			],
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

		this.$root.getLocation().then(function(position) {
			// Save position to root variables
			_self.$root.$data.coords = position.coords;
			_self.$root.$data.position = {
				lat: position.coords.latitude,
				lon: position.coords.longitude
			}

			// Ajax request to places API
			let urlParams = 
				`term=coffee&` + 
				`lat=${_self.$root.$data.position.lat}&lon=${_self.$root.$data.position.lon}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=distance&` +
				`limit=16`;

			_self.$root.fetchDataFromApi('search', urlParams)
				.then(response => {
					// Set the displayed item to the AJAX response
					if (typeof response.body.businesses === 'object') {
						// Notify prerender SPA plugin
						document.dispatchEvent(new Event('render-complete')); 

						// Set loading spinner
						_self.$root.$data.loading = false;

						const items = response.body.businesses;

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
						_self.items = items;
					} else {
						console.warn("No results.");
					}
				}, response => {
					console.warn("Error");
				});
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
