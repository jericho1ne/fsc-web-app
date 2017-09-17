//
// App entrypoint (defined in ./build/webpack.base.conf.js)
// 

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './VueRouter'
import Icon from 'vue-awesome/components/Icon'

// Include Font Awesome globally
// Font Awesome icons (single includes to reduce bundle size) 
// import 'vue-awesome/icons/circle'
// import 'vue-awesome/icons/coffee'
// Or include full set (dev mode)
import 'vue-awesome/icons'
Vue.component('icon', Icon)


// Import reusable UI elements from 'components/*'
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating)

//
// Register components
//
import Resource from 'vue-resource'
Vue.use(Resource)

//  https://www.npmjs.com/package/vue-js-modal 
//  http://vue-js-modal.yev.io/
import vmodal from 'vue-js-modal'
Vue.use(vmodal);

//  https://bootstrap-vue.github.io/docs/setup
// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	data: {
		// apiUrl: 'https://api-php.findsomecoffee.com/',
		apiUrl: '../../api-php/',
		// 	coords: '',
		// 	lat: '',
		// 	lon: '',
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
		vmodal
	},
	created: function () {
		// `this` points to the vm instance
		console.log(vmodal);
	}, 
	mounted: function () {
		
	},
	// Globally-avaiable functions
	methods: {
		/**
		 * Gets a user's position
		 * @return {Promise} Object that can be resolved with the provided value
		 */
		getLocation: function() {
			return new Promise(function (resolve, reject) {
				navigator.geolocation.getCurrentPosition(function (position) {
					resolve(position);
				});
			});
		},
		
		/**
		 * Ajax call to data source
		 * @param {string} endpoint (eg: search, cities, etc)
		 * @param {string} requestUrl GET url params to be appended
		 * @return {Promise} 
		 */
		fetchDataFromApi: function(endpoint, urlParams) {
			var _self = this;
			var requestUrl = _self._data.apiUrl + endpoint + '?' + urlParams;
			
			return this.$http({ 
				url: requestUrl, 
				method: 'GET',
				headers: { 
					'Access-Control-Allow-Origin': '*'
				}
			});
		}, // End fetchData

		getItemDetail: function(itemid) {
			let urlParams = `business=${itemid}`;
			let _self = this;
			
			_self.$modal.show('vue-js-modal');

			_self.$root.fetchDataFromApi('business', urlParams)
				.then(response => {
					if (typeof response.body === 'object') {
						console.log(response.body);

						// TODO store business details locally in an array to save 
						// future lookups
						// _self.businesses['this_one'] = response.body;
					}
				}, response => {
					console.warn("Error");
				});
		},
	}, 
})
