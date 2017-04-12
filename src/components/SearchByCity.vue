<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="list-group">
			<ul class="">
				<li v-for="city in cities" class="city">	
					<button @click="selectCity(city)"
						class="btn btn-primary"
					>{{city.display}}</button>
				</li>
			</ul>
		</div>
		<div id="items">
		<!-- results populate here -->
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'SearchByCity',
	data () {
		return {
			cities: [
				{ 
					name: 'Los Angeles',
					display: 'LA',
					state: 'CA',
				},
				{ 
					name: 'Santa Monica',
					display: 'Santa Monica',
					state: 'CA',
				},
				{ 
					name: 'Culver City',
					display: 'Culver City',
					state: 'CA',
				},
				{ 
					name: 'Santa Barbara',
					display: 'SB',
					state: 'CA',
				},
				{ 
					name: 'San Diego',
					display: 'SD',
					state: 'CA',
				},
				{ 
					name: 'San Francisco',
					display: 'SF',
					state: 'CA',
				},
				{ 
					name: 'Chicago',
					display: 'CHI',
					state: 'IL',
				},
				{ 
					name: 'New York',
					display: 'NYC',
					state: 'NYC',
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
		console.log(` ** ${this.$options.name} ** created `);

		this.globalMethod(); 
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} ** mounted `);

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


		  //   this.$http.get(requestUrl)
		  //  		.then(response => {
		  //  			// Set the displayed item to the AJAX response
		  //  			if (response.body.count) {
			 //   			_self.items = response.body.results;
			 //   			//console.log(_self.items);
		  //  			}
		  //  			else {
		  //  				console.warn("No results.");
		  //  			}
				// }, response => {
				// 	console.warn("Error");
				// })
				// .then(function() {
				// 	// console.log('*** fire this after data is received ***')
				// 	// TODO:  fill in actions that should always fire
				// 	//this.displayData(this.items);
				// });
		}, // End fetchData

		displayData: function(data) {
   			console.log( " ** displayData " );
			console.log(data);
			// this.$set('items', data);
		},

		deleteItem: function(index) {
			
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul.items {
		list-style-type: none;
		padding: 0;
	}
	ul li { display: inline; }
	
</style>
