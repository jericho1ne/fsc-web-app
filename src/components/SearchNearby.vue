<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="list-group">
			<star-rating :star-size="20"></star-rating>
			
			<ul class="items">
				<li v-for="item in items" class="item">	
					
					<div class="thumb" 
						v-bind:style="{ backgroundImage: 'url(' + item.image_url + ')' }">
						
						<div class="item-title">
							<h4 class="list-group-item-heading">{{item.name}}</h4>		
							<!-- <img :src="" /> -->
							<h5 class="list-group-item-text" v-if="item.review_count">
								{{ item.review_count }} reviews
							</h5>
						</div>
						<div class="thumb-spacer">
							<span>	
								{{item.rating}}
							</span>
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
	name: 'hello',
	data () {
		return {
			msg2: '...',
			cityList: [],
			// Set up dummy array of coffeeshops
			items: [
				{ name: 'Refinery', rating: '5', review_count: '200' },
				{ name: 'Metropolis', rating: '3', review_count: '10' }
			]
		}
	},
	created: function () {
		console.log(' ** index.vue created() ** ');
		// `this` points to the vm instance
	}, 
	mounted: function () {
		console.log(' ** Index.vue mounted() ** ');
		var self = this;

		// Get coffee shops AJAX
		var requestUrl = 'http://findsomecoffee.com/getCoffeeShops.php';
		// Hardcoded by default
		// TODO: get position of user when requested
		var params = {
			'city': 'Santa Monica, CA' 
		};
		self.fetchData(requestUrl, params);
	},
	
	methods: {
			/**
		 * Ajax call to data source
		 * @param  {[type]} requestUrl [description]
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		fetchData: function(requestUrl, params) {
			// console.log('fetchData :: ' + requestUrl);
			var _self = this;

		    this.$http.get(requestUrl)
		   		.then(response => {
		   			// Set the displayed item to the AJAX response
		   			if (response.body.count) {
		   			_self.items = response.body.results;

		   			console.log(_self.items);
		   			}
		   			else {
		   				console.warn("No results.");
		   			}
				}, response => {
					console.warn("Error");
				})
				.then(function() {
					console.log('*** fire this after data is received ***')
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
		margin: 0px 10px 10px 0px;
		border-radius: 4px;
		width: 180px;
		height: 180px;
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
		margin-left: 30%;
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
