//
// App entrypoint (defined in ./build/webpack.base.conf.js)
// 

//
// Register components 
// 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 
import Vue from 'vue'
import App from './App'
import VueRouter from './VueRouter'
import Icon from 'vue-awesome/components/Icon'
import Resource from 'vue-resource'
Vue.use(Resource)

// Include full set of Font Awesome icons (dev mode)
import 'vue-awesome/icons/coffee'
import 'vue-awesome/icons/phone-square'
import 'vue-awesome/icons/angle-up'
import 'vue-awesome/icons/angle-down'

import 'vue-awesome/icons/bookmark'
import 'vue-awesome/icons/compass'
import 'vue-awesome/icons/share-square'

import 'vue-awesome/icons/check-square'
import 'vue-awesome/icons/check-square-o'
import 'vue-awesome/icons/window-close'
import 'vue-awesome/icons/window-close-o'
import 'vue-awesome/icons/close'

// Single includes to reduce bundle size
Vue.component('icon', Icon)

// Import reusable UI elements from 'components/*'
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating)

//  https://www.npmjs.com/package/vue-js-modal 
//  http://vue-js-modal.yev.io/
import VModal from 'vue-js-modal'
// import DemoLoginModal from 'components/DemoLoginModal.vue'
Vue.use(VModal, { dialog: true });

//  https://bootstrap-vue.github.io/docs/setup
// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
const app = new Vue({
	router: VueRouter,
	template: '<App/>',
	el: '#app',
	data: {
		apiUrl: 'https://api.findsomecoffee.com',
		loading: false,
		coords: {
			latitude: '',
			longitude: ' '
		},
		prevCords: {
			latitude: '',
			longitude: ' '
		},
		// Set up single dummy item to use as user loading message
		items: [
			{ name: 'Searching Nearby...', rating: '', review_count: '' },
		],
		cities: [],
	},
	// Anything that changes inside this task will trigger the
	// provided method
	watch: {
		searchCity: function() {
			console.log( "searchCity. ")
			this.cityList = [];
			// Await a few chars before starting city name auto-search
			if (this.searchCity.length == 3) {
				//this.lookupNearbyCities();
			}
		}
	}, // End watch task
	// Globally available components
	components: { 
		App,
		Icon,
		StarRating,
		VModal
	},
	created: function () {
		// `this` points to the vm instance	
	}, 
	mounted: function () {
	},
	// Globally-avaiable functions
	methods: {
		/**
		 * Loads an external JS script and returns a promise
		 * @param {string} url Absolute script URL 
		 * @return {Promise} Object that can be resolved
		 */
		loadScript: function(url) {
			return new Promise(function(resolve, reject) {
				var script = document.createElement('script');

				script.async = true;
				script.src = url;

				// trigger fulfilled state when script is ready
				script.onload = resolve;
				// trigger rejected state when script is not found
				script.onerror = reject;

				document.head.appendChild(script);   
			});
		},

		/**
		 * Gets a user's position
		 * @return {Promise} Object that can be resolved with the provided value
		 */
		getLocation: function() {
			const _self = this;
			
			return new Promise(function (resolve, reject) {
				// _self.$root.$data.coords.latitude = 34.0656855;
				// _self.$root.$data.coords.longitude = -118.405370599;

				if (_self.$root.$data.coords.latitude &&
					_self.$root.$data.coords.longitude
				) {
					resolve ({
						'latitude': _self.$root.$data.coords.latitude,
						'longitude': _self.$root.$data.coords.longitude
					});
				}
				else {
					navigator.geolocation.getCurrentPosition(function (position) {
						// First move stale position to old vars
						_self.$root.$data.prevCoords = _self.$root.$data.coords;
						// Save new position to root variables
						_self.$root.$data.coords = position.coords;
						// Now we can resolve the promise
						resolve(_self.$root.$data.coords);
					});
				}
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
			var requestUrl = `${this.apiUrl}/${endpoint}/?${urlParams}`;
			
			// console.log(requestUrl);

			// Triggers loading spinner
			// this.$data.loading = true;

			return this.$http({ 
				url: requestUrl, 
				method: 'GET',
				headers: { 
					'Content-Type':'application/x-www-form-urlencoded'
				}
			});
		}, // End fetchData

		hasPositionChanged: function() {
			const oldPos = this.$root.$data.coords;
			const newPos = this.$root.$data.prevCoords;
			
			return (
				oldPos.latitude !== newPos.latitude && 
				oldPos.longitude !== newPos.longitude
			);
		},
		
		showItemDetail: function(item) {
			var _self = this;

			let mapsURL = 'https://www.google.com/maps/search/?api=1&query=';
			mapsURL += `${item.name}, ${item.location.address1}, ${item.location.city}, ${item.location.country}`;
			
			// console.log(mapsURL);

			const displayPhone = (item.phone !== '' && item.phone !== undefined)
				? `<div class=""><a class="phone-link" href="tel:${item.phone}">${item.display_phone}</a></div>` 
				: '';

			/*
				import 'vue-awesome/icons/check-square'
				import 'vue-awesome/icons/check-square-o'
				import 'vue-awesome/icons/window-close'
				import 'vue-awesome/icons/window-close-o'
				import 'vue-awesome/icons/close'
			*/

			const nowOpen = item.hours[0].is_open_now 
				? '<b>Open now</b>'
				: '';

			const bodyHtml = 
				`<div>${item.location.display_address[0]}<br>` +
				`${item.location.display_address[1]}</div>` + 
				`<div>${nowOpen}</div>` +
				`${displayPhone}` +
				// `${item.review_count} reviews<br>` +
				`<div><img src="${item.image_url}"></div>`;

			let itemToBeDisplayed = {
				title: item.name,
				text: bodyHtml,
				buttons: [
					{ 
						title: `Get Directions`, 
						handler: () => { 
							window.open(mapsURL, '_blank');
						} 
					},
					{ 
						title: 'Close' 
					}
				]
			};
			_self.$modal.show('dialog', itemToBeDisplayed);
		}, // End showItemDetail

		getItemDetail: function(itemid) {
			let _self = this;

			// Turn on spinner
			_self.$root.$data.loading = true;

			if (itemid === '' || itemid === undefined) {
				return;
			}
			// Replace funky characters to keep Yelp API from breaking
			var dict = {
				'á':'a', 
				'á':'a', 
				'ç':'c', 
				'é':'e',
				'è':'e',
				'ê':'e',
			}
			itemid = itemid.replace(/[^\w ]/g, function(char) {
				return dict[char] || char;
			});

			let urlParams = `business=${itemid}`;

			_self.$root.fetchDataFromApi('business', urlParams)
				.then(response => {
					if (typeof response.body === 'object') {
						// Turn off spinner
						_self.$root.$data.loading = false;
						// Pop up modal
						_self.$root.showItemDetail(response.body);
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

