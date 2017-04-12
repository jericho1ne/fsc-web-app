<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="list-group">
			<ul class="items">
				<li v-for="item in items" class="item">	
					
					<div class="thumb" 
						v-bind:style="{ backgroundImage: 'url(' + item.image_url + ')' }">
						
						<div class="item-title">
							<h4 class="list-group-item-heading">{{item.name}}</h4>		
							<!-- <img :src="" /> -->
							<h5 class="list-group-item-text" v-if="item.review_count">
								{{item.review_count}} reviews
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
							<icon name="bookmark" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="compass" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="share-square" class="fa-icon-md" style="fill:#fff"></icon>
							<!-- <br>
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
				coords: '',
				lat: '',
				lon: '',
			},
			msg2: '...',
			cityList: [],
			// Set up dummy array of coffeeshops
			items: [
				{ name: ' * Searching Nearby *', rating: '', review_count: '' },
			]
		} // End return
	},
	created: function () {
		// `this` points to the vue instance
		// console.log(` ** ${this.$options.name} ** created `);
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} mounted **`);
		let _self = this;

		this.getLocation().then(function(position) {
			// Save position to member vars
			_self.position.coords = position.coords
			_self.position.lat = position.coords.latitude
			_self.position.lon = position.coords.longitude

			// Ajax request to places API
			let urlParams = 
				`term=coffee&` + 
				`lat=${_self.position.lat}&lon=${_self.position.lon}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=distance` +
				`limit=30`;

			console.log(" Grabbing location ... ");
			_self.fetchData(urlParams);
		});
	},
	
	methods: {
		/**
		 * Ajax call to data source
		 * @param  {[type]} requestUrl [description]
		 * @return {[type]}            [description]
		 */
		fetchData: function(urlParams) {
			console.log(" ** Query ** ")
			console.log(urlParams)
			var _self = this;
			var requestUrl = '//api.findsomecoffee.com/search';
		    this.$http({ 
		    		url: requestUrl + '?' + urlParams, 
		    		method: 'GET',
		    	})
		   		.then(response => {
		   			// Set the displayed item to the AJAX response
		   			if (typeof response.body.businesses === 'object') {
			   			_self.items = response.body.businesses;
		   			}
		   			else {
		   				console.warn("No results.");
		   			}
				}, response => {
					console.warn("Error");
				})
				.then(function() {
					// console.log('*** fire this after data is received ***')
					// TODO:  fill in actions that should always fire
					//this.displayData(this.items);
				});
		}, // End fetchData

		getLocation: function() {
			return new Promise(function (resolve, reject) {
				navigator.geolocation.getCurrentPosition(function (position) {
					resolve(position);
				});
			});
		},

		displayData: function(data) {
   			console.log( " ** displayData " );
			console.log(data);
			// this.$set('items', data);
		},

		deleteItem: function(index) {
			if( confirm("Are you sure you want to delete this entry?")) {
				// $remove is a Vue convenience method similar to splice
				this.coffeeshops.$remove(index);        
			}
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	
</style>
