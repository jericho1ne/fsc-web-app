

<!-- TUTORIAL HERE: -->

<!-- https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2 -->

<template>
	<div class="hello border-dev">
		<h1>{{ msg }}</h1>
		<h2>{{ msg2 }}</h2>
		<input type="text" v-model="msg" />
		<h3>Essential Links</h3>
		<ul>
		  <li><a href="#" target="_blank">Link 1</a></li>
		  <li><a href="#" target="_blank">Link 2</a></li>
		  <br>
		</ul>

		<!-- Coffee shops display here -->
		<!-- <div class="list-group">
			<li v-repeat="items">
				{{item.name}} {{item.rating}}
			</li>
		</div> -->
		<div class="list-group">
			<ul>
				<li v-for="item in items">
					<h4 class="list-group-item-heading">{{item.name}}</h4>
					<i class="glyphicon glyphicon-bullhorn"></i> 
					<h5>{{item.rating}}</h5>
					<!-- <i class="glyphicon glyphicon-calendar" v-if="{{item.rating}}"></i> -->
					
					<img :src="item.image_url" />
					<p class="list-group-item-text" v-if="item.review_count">
						{{ item.review_count }} reviews
					</p>

					<!-- //click:deleteItem({{index}}) -->
					<button class="btn btn-xs btn-danger" v-on="">Delete</button>
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
			msg: 'Find Some Coffee',
			msg2: 'nearby:',
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
  min-width: 240px;
  min-height: 120px;
  background-color: #fafafa;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
