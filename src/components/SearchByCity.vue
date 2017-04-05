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
				<li v-for="city in cities" class="city">	
					
					
					

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
			cities: [
				'Los Angeles',
				'Santa Monica',
				'Culver City',
				'San Francisco',
				'Santa Barbara',
				'Seattle',
				'San Diego',
			],
		}
	},
	created: function () {
		console.log(` ** ${this.$options.name} ** created `);
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
		 * Ajax call to data source
		 * @param  {[type]} requestUrl [description]
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		fetchData: function(requestUrl, params) {
			var _self = this;

		    this.$http.get(requestUrl)
		   		.then(response => {
		   			// Set the displayed item to the AJAX response
		   			if (response.body.count) {
			   			_self.items = response.body.results;
			   			//console.log(_self.items);
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

	li.item {
		position: relative;
		display: inline-block;
		border: 1px solid #dedede;
		margin: 0px 20px 20px 0px;
		border-radius: 4px;
		width: 200px;
		height: 200px;
		background-color: #fafafa;
		overflow: hidden;
	}
	li .thumb:hover {
		cursor: pointer;
	}
	.thumb {
		top: 0px;
		height: 100%;
		background-position: left top;
		background: no-repeat;
		background-size: cover;
	}
	.item-title {
		min-height: 15%;
		height: auto;
		background-color: #fff;
		padding: 2px 6px;
		opacity: 0.9;
	}
	.thumb-spacer {
		height: auto;
	}
	.mini-action-bar {
		position: absolute;
		bottom: -2px;
		margin-left: 35%;
		text-align: center;
		opacity: 0.95;
		padding: 0px;
		height: auto;
		color: #fff;
	}
	a {
		color: #42b983;
	}
</style>
