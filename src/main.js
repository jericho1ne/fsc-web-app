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
		cityList: ['asdfasdf', 'asdfasdf2'],
	    item: { name: '', rating: '', review_count: '' },
	    items: [],
	},
	// Anything that changes inside this task will trigger the
	// provided method
	watch: {
		searchCity: function() {
			this.cityList = [];
			// Await a few chars before starting city name auto-search
			if (this.searchCity.length == 3) {
				//this.lookupNearbyCities();
			}
		}
	}, // End watch task
	router,
	coffeeshops: {},
	
	template: '<App/>',
	components: { App },
	created: function () {
		console.log(' ** main.js created() ** ');
		// `this` points to the vm instance
	}, 
	mounted: function () {

	},
	// Custom Functions that do what I want
	methods: {
		// 
	}, 
})
