//
// App entrypoint (defined in ./build/webpack.base.conf.js)
// 

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './VueRouter'
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
const app = new Vue({
	el: '#app',
	data: {
		// position: {
		// 	coords: '',
		// 	lat: '',
		// 	lon: '',
		// },
		items: [],
	},
	// Anything that changes inside this task will trigger the
	// provided method
	watch: {
		searchCity: function() {
			console.log( "WATCH searchCity TRIGGERED ")
			this.cityList = [];
			// Await a few chars before starting city name auto-search
			if (this.searchCity.length == 3) {
				//this.lookupNearbyCities();
			}
		}
	}, // End watch task

	router: VueRouter,
	
	template: '<App/>',

	// Globally available components
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
	// Custom Globally-avaiable functions
	methods: {
		globalMethod: function() {
			console.log( ' globalMethod called. ')
		}
	}, 
})
