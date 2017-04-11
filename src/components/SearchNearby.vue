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
							<div>
								<star-rating 
									:star-size="24" 
								 	:rating="item.rating"
									:show-rating="false"
									:border-width="1"
								 	:increment="0.1"
								 	:read-only="true"
								 ></star-rating>
							 </div>
						</div>
						<div class="thumb-spacer">
							
						</div>

						<div class="mini-action-bar">
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
				// { name: 'Refinery', rating: '5', review_count: '200' },
				// { name: 'Metropolis', rating: '3', review_count: '10' }
			]
		} // End return
	},
	created: function () {
		// `this` points to the vue instance
		console.log(` ** ${this.$options.name} ** created `);
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} ** mounted `);
		let _self = this;

		this.getLocation().then(function(position) {
			console.log(position.coords)
			console.log(_self)
			_self.position.coords = position.coords
			_self.position.lat = position.coords.latitude
			_self.position.lon = position.coords.longitude

			var requestUrl = 'http://api.findsomecoffee.com/search';
			// var requestUrl = 'http://localhost:3001/search';
			// TODOL  Hardcoded, for now.  But, need position of user when requested
			let urlParams = 
				`term=coffee&` + 
				`lat=${_self.position.lat}&lon=${_self.position.lon}&` +
				`price=1,2&` +
				`limit=30`;
			
			_self.fetchData(requestUrl + '?' + urlParams);
		});

		// Get coffee shops AJAX
		/*
		var requestUrl = 'http://findsomecoffee.com/getCoffeeShops.php';
		let urlParams = 
			`city=Santa Monica&limit=10&term=coffee&radius=3200&limit=30`;
		*/		
	},
	
	methods: {
		/**
		 * Ajax call to data source
		 * @param  {[type]} requestUrl [description]
		 * @return {[type]}            [description]
		 */
		fetchData: function(requestUrl) {
			var _self = this;
			
			console.log(requestUrl);

		    this.$http({ 
		    		url: requestUrl, 
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
