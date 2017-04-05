// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

// Include Font Awesome globally
// Font Awesome icons (single includes to reduce bundle size) 
// import 'vue-awesome/icons/circle'
// import 'vue-awesome/icons/coffee'
// Or include full set (dev mode)
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import StarRating from 'vue-star-rating'

// import StarRating from 'components/StarRating'
Vue.component('star-rating', StarRating)

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


	router: router,
	
	template: '<App/>',
	components: { 
		App,
		Icon,
		StarRating,
	},
	created: function () {
		// `this` points to the vm instance
	}, 
	mounted: function () {

	},
	// Custom Functions that do what I want
	methods: {
		// 
	}, 
})
