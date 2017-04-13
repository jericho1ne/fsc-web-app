<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="">
			<ul class="">
				<li v-for="city in cities" class="city">	
					<button @click="selectCity(city)"
						class="btn btn-primary"
					>{{city.display}}</button>
				</li>
			</ul>
		</div>
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
	name: 'SearchByCity',
	data () {
		return {
			items: [
				// { name: ' * Searching Nearby *', rating: '', review_count: '' },
			],
			cities: [
				{ 
					name: 'Seattle',
					display: 'Seattle',
					state: 'WA',
				},
				{ 
					name: 'Portland',
					display: 'Portland',
					state: 'OR',
				},
				{ 
					name: 'San Francisco',
					display: 'San Francisco',
					state: 'CA',
				},
				{ 
					name: 'Santa Barbara',
					display: 'Santa Barbara',
					state: 'CA',
				},
				{ 
					name: 'Santa Monica',
					display: 'Santa Monica',
					state: 'CA',
				},
				{ 
					name: 'Los Angeles',
					display: 'LA',
					state: 'CA',
				},
				{ 
					name: 'Culver City',
					display: 'Culver City',
					state: 'CA',
				},
				{ 
					name: 'Mission Viejo',
					display: 'Mission Viejo',
					state: 'CA',
				},
				{ 
					name: 'San Diego',
					display: 'San Diego',
					state: 'CA',
				},
				{ 
					name: 'East Lansing',
					display: 'East Lansing',
					state: 'MI',
				},
				{ 
					name: 'Chicago',
					display: 'CHI',
					state: 'IL',
				},
				{ 
					name: 'New York',
					display: 'NYC',
					state: 'NY',
				},
				{ 
					name: 'Melbourne',
					display: 'Melbourne',
					state: 'VIC',
				},
				{ 
					name: 'Sydney',
					display: 'Sydney',
					state: 'NSW',
				},
			],
		}
	},
	created: function () {
		// this.globalMethod(); 
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} mounted **`);

		var self = this;

		// // Get coffee shops AJAX
		// var requestUrl = 'http://findsomecoffee.com/getCoffeeShops.php';
		// // Hardcoded by default
		// // TODO: get position of user when requested
		// var params = {
		// 	'city': 'Santa Monica, CA' 
		// };
		// self.fetchData(requestUrl, params);
	},
	
	methods: {
		/**
		 * Ajax call to search by city name
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		selectCity: function(city) {
			var _self = this;

			let selectedCity = city.name + ', ' + city.state;
			console.log(" selectCity called :: " + selectedCity)


		  	// Ajax request to places API
			let urlParams = 
				`term=coffee&` + 
				`location=${selectedCity}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=rating&` +
				`limit=30`;

			console.log(" Grabbing location ... ");
			_self.fetchData(urlParams);
		}, // End fetchData

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
		   			console.log(response)
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
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	
</style>
