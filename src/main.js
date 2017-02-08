// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Vue.use(require('vue-resource'));
import Resource from 'vue-resource'
Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
	    item: { name: '', rating: '', review_count: '' },
	    items: {}
	},
	router,
	coffeeshops: {},
	
	template: '<App/>',
	components: { App },
	created: function () {
		// `this` points to the vm instance
	}, 
	mounted: function () {
		var self = this;

		// '../getCoffeeShops.php';
		var requestUrl = 'http://findsomecoffee.com/getCoffeeShops.php';
		//var requestUrl = '/./~/data.json';

		// Hardcoded by default
		// TODO: get position of user when requested
		var params = {
			'city': 'Santa Monica, CA' 
		};

		self.fetchData(requestUrl, params);

	},
	methods: {
		fetchData: function(requestUrl, params) {
			console.log(requestUrl);

		    this.$http.get(requestUrl)
		   		.then(response => {
		   			console.log( "done." );
					if (response.body.count) {
						// Which one does what?
		       			this.coffeeshops = response.body.results;
		       			//this.$set('coffeeshops', response.body.results);
					}

				}, response => {
					console.warn("Error");
				})
				.then(function() {
					this.displayData(this.coffeeshops);
					console.log('*** fire this after data is received ***')
					// TODO:  fill in actions that should always fire
				});
		}, // End fetchData

		displayData: function(data) {
			console.log(data[0]);
			console.log(data[1]);
			console.log(data[2]);

		},

		deleteItem: function(index) {
			if( confirm("Are you sure you want to delete this entry?")) {
				// $remove is a Vue convenience method similar to splice
				this.coffeeshops.$remove(index);        
			}
		}
	}, 
})
