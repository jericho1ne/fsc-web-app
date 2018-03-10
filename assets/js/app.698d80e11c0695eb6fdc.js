webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_analytics__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_analytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_analytics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_SearchNearby__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_SearchNearby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_SearchNearby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_SearchByCity__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_SearchByCity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_SearchByCity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Social__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Social___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_Social__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_About__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_About___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components_About__);
//
// Components
// 

// Architectural (Icon and StarRating already in global scope)




// Installs <router-view> and <router-link>,
// injects $router and $route to all router-enabled child components
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

// Google Analytics
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_analytics___default.a, {
	id: 'UA-106707678-2',
	VueRouter: __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]
});

// Pages 





// Define the URL routes
const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3_components_SearchNearby___default.a }, { path: '/nearby', component: __WEBPACK_IMPORTED_MODULE_3_components_SearchNearby___default.a }, { path: '/whats-good', component: __WEBPACK_IMPORTED_MODULE_5_components_Social___default.a }, { path: '/cities', component: __WEBPACK_IMPORTED_MODULE_4_components_SearchByCity___default.a }, { path: '/about', component: __WEBPACK_IMPORTED_MODULE_6_components_About___default.a }];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	mode: 'history',
	routes
}));

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let icons = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icon',
  props: {
    name: {
      type: String,
      validator(val) {
        if (val) {
          if (!(val in icons)) {
            console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` + `\nPlesase make sure you have imported this icon before using it.`);
            return false;
          }
          return true;
        }
        console.warn(`Invalid prop: prop "name" is required.`);
        return false;
      }
    },
    scale: [Number, String],
    spin: Boolean,
    inverse: Boolean,
    pulse: Boolean,
    flip: {
      validator(val) {
        return val === 'horizontal' || val === 'vertical';
      }
    },
    label: String
  },
  data() {
    return {
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1
    };
  },
  computed: {
    normalizedScale() {
      let scale = this.scale;
      scale = typeof scale === 'undefined' ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this);
        return this.outerScale;
      }
      return scale * this.outerScale;
    },
    klass() {
      return {
        'fa-icon': true,
        'fa-spin': this.spin,
        'fa-flip-horizontal': this.flip === 'horizontal',
        'fa-flip-vertical': this.flip === 'vertical',
        'fa-inverse': this.inverse,
        'fa-pulse': this.pulse
      };
    },
    icon() {
      if (this.name) {
        return icons[this.name];
      }
      return null;
    },
    box() {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`;
      }
      return `0 0 ${this.width} ${this.height}`;
    },
    ratio() {
      if (!this.icon) {
        return 1;
      }
      let { width, height } = this.icon;
      return Math.max(width, height) / 16;
    },
    width() {
      return this.childrenWidth || this.icon && this.icon.width / this.ratio * this.normalizedScale || 0;
    },
    height() {
      return this.childrenHeight || this.icon && this.icon.height / this.ratio * this.normalizedScale || 0;
    },
    style() {
      if (this.normalizedScale === 1) {
        return false;
      }
      return {
        fontSize: this.normalizedScale + 'em'
      };
    },
    raw() {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) {
        return null;
      }
      let raw = this.icon.raw;
      let ids = {};
      raw = raw.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
        let uniqueId = getId();
        ids[id] = uniqueId;
        return ` id="${uniqueId}"`;
      });
      raw = raw.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
        let id = rawId || pointerId;
        if (!id || !ids[id]) {
          return match;
        }

        return `#${ids[id]}`;
      });

      return raw;
    }
  },
  mounted() {
    if (this.icon) {
      return;
    }
    this.$children.forEach(child => {
      child.outerScale = this.normalizedScale;
    });
    let width = 0;
    let height = 0;
    this.$children.forEach(child => {
      width = Math.max(width, child.width);
      height = Math.max(height, child.height);
    });
    this.childrenWidth = width;
    this.childrenHeight = height;
    this.$children.forEach(child => {
      child.x = (width - child.width) / 2;
      child.y = (height - child.height) / 2;
    });
  },
  register(data) {
    for (let name in data) {
      let icon = data[name];

      if (!icon.paths) {
        icon.paths = [];
      }
      if (icon.d) {
        icon.paths.push({ d: icon.d });
      }

      if (!icon.polygons) {
        icon.polygons = [];
      }
      if (icon.points) {
        icon.polygons.push({ points: icon.points });
      }

      icons[name] = icon;
    }
  },
  icons
});

let cursor = 0xd4937;
function getId() {
  return `fa-${(cursor++).toString(16)}`;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_fsc_logo_svg__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_fsc_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_fsc_logo_svg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// SVG icons


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app_name',
	components: {
		SomeIcon: __WEBPACK_IMPORTED_MODULE_0__assets_fsc_logo_svg___default.a
	}
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'About',
	data() {
		return {};
	},
	created: function () {
		let _self = this;

		// PRERENDER SPA TRIGGER
		setTimeout(() => {
			document.dispatchEvent(new Event('custom-post-render-event'));
		}, 1000);
	},
	mounted: function () {},

	methods: {}
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'SearchByCity',
	data() {
		return {
			cityListActive: true,
			currentCity: '',
			items: []
		};
	},
	created: function () {},
	mounted: function () {
		var _self = this;

		// Check for cached data
		if (_self.$root.$data.cities.length) {
			return;
		}
		// Turn on spinner
		_self.$root.$data.loading = true;

		// Ajax request to grab all cities available
		let urlParams = `show=all`;

		_self.$root.fetchDataFromApi('cities', urlParams).then(response => {
			// Set the displayed cities to the AJAX response
			if (typeof response.body === 'object') {
				// Turn off spinner
				_self.$root.$data.loading = false;
				_self.$root.$data.cities = response.body;
			} else {
				console.warn("No results.");
			}
		}, response => {
			console.warn("Error grabbing list of cities");
		});
	},

	methods: {
		isThisTheCurrentCity: function (city) {
			const thisIsTheCurrentCity = this.currentCity === city.name;
			return thisIsTheCurrentCity;
		},

		/**
   * Ajax call to search by city name
   * @param  {[type]} params     [description]
   * @return {[type]}            [description]
   */
		selectCity: function (city) {
			var _self = this;

			let selectedCity = city.name + (city.state !== undefined ? `, ${city.state}` : '') + (city.country !== undefined ? `, ${city.country}` : '');

			// Turn on Spinner
			_self.$root.$data.loading = true;

			_self.currentCity = city.name;

			// Remove existing list of shops, display loading message
			_self.items = [{ name: ' * Searching in ' + city.name + ' *', rating: '', review_count: '' }];

			// Hide city selection buttons
			this.toggleVisibility();

			// Ajax request to places API
			let urlParams = `term=coffee-tea&` + `location=${selectedCity}&` +
			// List of comma delimited pricing levels (1,2,3,4)
			`price=1,2,3,4&` +
			// defaults to best_match
			// { best_match, rating, review_count, distance }
			`sort_by=rating&` + `fieldset=light&` + `limit=40`;

			_self.$root.fetchDataFromApi('search', urlParams).then(response => {
				// Set the displayed item to the AJAX response
				if (typeof response.body === 'object') {
					let items = response.body;
					items = _self.$root.stripCoffeeShops(items);

					// Turn off spinner
					_self.$root.$data.loading = false;

					// Sort based on proximity
					items.sort(function (a, b) {
						// sort by rating (highest first)
						return parseFloat(a.rating) - parseFloat(b.rating) || a.reviews - b.reviews;
					}).reverse();

					// Update displayed items
					_self.items = items;
				} else {
					console.warn("No results.");
				}
			}, response => {
				console.warn("Error");
			});
		}, // End selectCity

		getItemDetail: function (itemid) {
			this.$root.getItemDetail(itemid);
		},

		toggleVisibility: function () {
			this.cityListActive = !this.cityListActive;
		}

	}
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'SearchNearby',
	data() {
		return {
			msg2: '...',
			cityList: [],
			// Blank, just need a placeholder
			item: {} // End return
		};
	},
	created: function () {
		// `this` points to the vue instance
	},
	mounted: function () {
		let _self = this;

		// Set spinner
		_self.$root.$data.loading = true;

		_self.$root.getLocation().then(function (position) {
			// Set spinner
			_self.$root.$data.loading = false;

			// Here's our chance to use the cached data
			if (!_self.$root.hasPositionChanged() && _self.$root.$data.length) {
				// already have stuff, just display it
				console.log("Using cached data.");
				return;
			} else {
				// Ajax request to places API
				let urlParams = `term=coffee-tea&` + `lat=${position.latitude}&lon=${position.longitude}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=distance&` + `fieldset=light&` + `limit=30`;

				_self.$root.fetchDataFromApi('search', urlParams).then(response => {
					// Set the displayed item to the AJAX response
					if (typeof response.body === 'object') {
						// Set loading spinner
						_self.$root.$data.loading = false;

						let items = response.body;
						items = _self.$root.stripCoffeeShops(items);

						// Sort based on proximity
						items.sort(function (a, b) {
							// sort by proximity (closest first)
							return parseFloat(a.distance) - parseFloat(b.distance);
						});

						// Convert meters to miles, 
						// customize displayed values
						items.forEach(item => {
							let thisFarAway = (item.distance * 0.000621371).toFixed(1);
							item.distance = thisFarAway < 0.1 ? `* Really Close *` : `${thisFarAway} miles away`;

							// Replace the larger original image with a smaller one
							const pattern = /o.jpg/;
							const smaller_img = item.image_url.replace(pattern, 'l.jpg');
							item.image_url = smaller_img;
						});

						// Set the reactive property, which auto-triggers display
						_self.$root.$data.items = items;
					} else {
						console.warn("No results.");
					}
				}, response => {
					console.warn("Error");
				});
			} // Else else case for no cached business data
		});
	},

	methods: {
		getItemDetail: function (itemid) {
			this.$root.getItemDetail(itemid);
		},
		deleteItem: function (index) {
			if (confirm("Are you sure you want to delete this entry?")) {
				// $remove is a Vue convenience method similar to splice
				// this.coffeeshops.$remove(index);        
			}
		},
		beforeOpen(event) {
			// console.log(event.params);
		},
		beforeClose(event) {
			// console.log(event.params);
		}
	}
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Social',
	data() {
		return {};
	},
	created: function () {
		let _self = this;
		// Turn on spinner
		_self.$root.$data.loading = true;

		// PRERENDER SPA TRIGGER
		setTimeout(() => {
			document.dispatchEvent(new Event('custom-post-render-event'));
		}, 4000);

		this.$root.loadScript('//assets.juicer.io/embed.js').then(function () {
			// Turn off spinner after a bit more animation 
			setTimeout(function () {
				_self.$root.$data.loading = false;
				$('li.feed-item.juicer.image-post').remove();
			}, 500);
		});
	},
	mounted: function () {
		// 
	},

	methods: {}
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VueRouter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_components_Icon__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_components_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_awesome_components_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_awesome_icons_coffee__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_awesome_icons_phone_square__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_awesome_icons_angle_up__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_awesome_icons_angle_down__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_awesome_icons_bookmark__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_awesome_icons_compass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_awesome_icons_share_square__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_awesome_icons_check_square__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vue_awesome_icons_check_square_o__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_awesome_icons_window_close__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vue_awesome_icons_window_close_o__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vue_awesome_icons_close__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vue_star_rating__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vue_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_vue_star_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vue_js_modal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vue_js_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_vue_js_modal__);
//
// App entrypoint (defined in ./build/webpack.base.conf.js)
// 

//
// Register components 
// 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["a" /* default */]);

// Include full set of Font Awesome icons (dev mode)















// Single includes to reduce bundle size
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('icon', __WEBPACK_IMPORTED_MODULE_3_vue_awesome_components_Icon___default.a);

// Import reusable UI elements from 'components/*'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('star-rating', __WEBPACK_IMPORTED_MODULE_17_vue_star_rating___default.a);

//  https://www.npmjs.com/package/vue-js-modal 
//  http://vue-js-modal.yev.io/

// import DemoLoginModal from 'components/DemoLoginModal.vue'
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_18_vue_js_modal___default.a, { dialog: true });

//  https://bootstrap-vue.github.io/docs/setup
// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	router: __WEBPACK_IMPORTED_MODULE_2__VueRouter__["a" /* default */],
	template: '<App/>',
	el: '#app',
	data: {
		apiUrl: 'https://api.findsomecoffee.com',
		loading: false,
		coords: {
			latitude: '',
			longitude: ''
		},
		prevCords: {
			latitude: '',
			longitude: ''
		},
		// Set up single dummy item to use as user loading message
		items: [{ name: 'Searching Nearby...', rating: '', review_count: '' }],
		cities: []
	},
	// Anything that changes inside this task will trigger the
	// provided method
	watch: {}, // End watch task
	// Globally available components
	components: {
		App: __WEBPACK_IMPORTED_MODULE_1__App___default.a,
		Icon: __WEBPACK_IMPORTED_MODULE_3_vue_awesome_components_Icon___default.a,
		StarRating: __WEBPACK_IMPORTED_MODULE_17_vue_star_rating___default.a,
		VModal: __WEBPACK_IMPORTED_MODULE_18_vue_js_modal___default.a
	},
	created: function () {
		// `this` points to the vm instance	
	},
	mounted: function () {
		// 
	},
	// Globally-avaiable functions
	methods: {
		/**
   * Loads an external JS script and returns a promise
   * @param {string} url Absolute script URL 
   * @return {Promise} Object that can be resolved
   */
		loadScript: function (url) {
			return new Promise(function (resolve, reject) {
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
		getLocation: function () {
			const _self = this;
			return new Promise(function (resolve, reject) {
				if (_self.$root.$data.coords.latitude && _self.$root.$data.coords.longitude) {
					resolve({
						'latitude': _self.$root.$data.coords.latitude,
						'longitude': _self.$root.$data.coords.longitude
					});
				} else {
					// Browser should have access to geolocation features over https
					if (navigator.geolocation && typeof navigator.geolocation.getCurrentPosition === 'function') {
						navigator.geolocation.getCurrentPosition(function (position) {
							// First move stale position to old vars
							_self.$root.$data.prevCoords = _self.$root.$data.coords;
							// Save new position to root variables
							_self.$root.$data.coords = position.coords;
							// Now we can resolve the promise
							resolve(_self.$root.$data.coords);
						});
					}
					// Predefine lat/lon for debugging purposes or prerendering
					else {
							// let BH = { latitude: 34.065685, longitude: -118.4053706 };
							// let EL = { latitude: 42.733261, longitude: -84.5240879 };
							let SaMo = { latitude: 34.0292383, longitude: -118.4762496 };
							_self.$root.$data.prevCoords = _self.$root.$data.coords = SaMo;
							resolve(_self.$root.$data.coords);
						}
				} // End else need to query for coordinates
			});
		},

		/**
   * Ajax call to data source
   * @param {string} endpoint (eg: search, cities, etc)
   * @param {string} requestUrl GET url params to be appended
   * @return {Promise} 
   */
		fetchDataFromApi: function (endpoint, urlParams) {
			var _self = this;
			var requestUrl = `${this.apiUrl}/${endpoint}/?${urlParams}`;

			// Triggers loading spinner
			// this.$data.loading = true;

			// PRERENDER SPA TRIGGER
			setTimeout(() => {
				console.log(">>> FIRED >>> custom-post-render-event");
				document.dispatchEvent(new Event('custom-post-render-event'));
			}, 5000);

			return this.$http({
				url: requestUrl,
				method: 'GET',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}, // End fetchData

		hasPositionChanged: function () {
			const oldPos = this.$root.$data.coords;
			const newPos = this.$root.$data.prevCoords;

			return oldPos.latitude !== newPos.latitude && oldPos.longitude !== newPos.longitude;
		},

		showItemDetail: function (item) {
			var _self = this;
			let mapsURL = 'https://www.google.com/maps/search/?api=1&query=';
			mapsURL += `${item.name}, ${item.location.address1}, ${item.location.city}, ${item.location.country}`;

			const displayPhone = item.phone !== '' && item.phone !== undefined ? `<div class="pad-top-4"><a class="phone-link" href="tel:${item.phone}">${item.display_phone}</a></div>` : '';

			let reviews = '<div id="reviews">';

			if (item.reviews.length > 0) {
				for (var i = 0; i < 3; i++) {
					reviews += `<div class="review"><span>${item.reviews[i].text}<span></div>`;
				}
				// item.reviews.forEach((review, index) => {
				// 	reviews += `<div class="review">${review.text}</div>`;
				// })
			}
			reviews += '</div>';

			const nowOpen = item.hours[0].is_open_now ? '<b>Open now</b>' : '';

			// const bodyHtml = 
			// 	`<div>${item.location.display_address[0]}, ` +
			// 	`${item.location.display_address[1]}</div>` + 
			// 	`<div>${nowOpen}</div>` +
			// 	`${displayPhone}` +
			// 	`${reviews}` +
			// 	// `${item.review_count} reviews<br>` +
			// 	`<div class="detail-thumb"><img src="${item.image_url}"></div>`;

			const bodyHtml = `${reviews}`;
			// `${item.review_count} reviews<br>` +
			// `<div class="detail-thumb"><img src="${item.image_url}"></div>`;

			const title = `<div class="review-header" style="background-image: url('${item.image_url}');">` + `<div class="title">${item.name}</div>` + `<div>${item.location.display_address[0]}, ` + `${item.location.display_address[1]}</div>` + `<div>${nowOpen}</div>` + `${displayPhone}` + `</div>`;

			let itemToBeDisplayed = {
				title: title,
				text: bodyHtml,
				buttons: [{
					title: `Get Directions`,
					handler: () => {
						window.open(mapsURL, '_blank');
					}
				}, {
					title: 'Close'
				}]
			};
			_self.$modal.show('dialog', itemToBeDisplayed);
		}, // End showItemDetail

		getItemDetail: function (itemid) {
			let _self = this;

			// Turn on spinner
			_self.$root.$data.loading = true;

			if (itemid === '' || itemid === undefined) {
				return;
			}
			// Replace funky characters to keep Yelp API from breaking
			var dict = {
				'á': 'a',
				'á': 'a',
				'ç': 'c',
				'é': 'e',
				'è': 'e',
				'ê': 'e'
			};
			itemid = itemid.replace(/[^\w ]/g, function (char) {
				return dict[char] || char;
			});

			let urlParams = `business=${itemid}`;

			_self.$root.fetchDataFromApi('business', urlParams).then(response => {
				if (typeof response.body === 'object') {
					// Turn off spinner
					_self.$root.$data.loading = false;
					// Pop up modal
					_self.$root.showItemDetail(response.body);

					// TODO store business details locally in an array to save 

					// Cache future lookups
					// _self.businesses['this_one'] = response.body;
				}
			}, response => {
				console.warn("Error");
			});
		}, // End getItemDetail()

		/**
   * Remove mainstream shops and ones without a photo
   * @param  {array} items Array of cofee shops returned from API
   * @return {array} Stripped down list that passes QC ;)
   */
		stripCoffeeShops: function (items) {
			let goodCoffeeShops = [];
			items.forEach((item, index) => {
				// const itemName = item.name.trim().toLowerCase();
				const imgUrl = item.image_url.trim();

				if (imgUrl !== '') {
					goodCoffeeShops.push(item);
				}
			});
			return goodCoffeeShops;
		} // End stripCoffeeShops()
	}
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  "data-v-6d4b50a0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-dd91d566",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "aboutPage"
    }
  }, [_c('h2', [_vm._v("About FindSomeCoffee")]), _vm._v(" "), _c('div', {
    staticClass: "pad-top-4"
  }, [_c('hr'), _vm._v("\n            We have an "), _c('a', {
    attrs: {
      "href": "https://itunes.apple.com/us/app/find-some-coffee/id1316428363?mt=8"
    }
  }, [_vm._v("iOS mobile app")]), _c('br'), _vm._v("\n            Also, an "), _c('a', {
    attrs: {
      "href": "https://play.google.com/store/apps/details?id=com.apps.fndsmcoffee"
    }
  }, [_vm._v("Android mobile app")])]), _vm._v(" "), _c('div', {
    staticClass: "pad-top-4"
  }, [_c('hr'), _vm._v("\n            We have a "), _c('a', {
    attrs: {
      "href": "https://blog.findsomecoffee.com"
    }
  }, [_vm._v("blog")]), _vm._v(" where we review the best coffee shops in Los Angeles")]), _vm._v(" "), _c('div', {
    staticClass: "pad-top-4"
  }, [_c('hr'), _vm._v("\n            And we have an email where you can ask us questions: \n            "), _c('a', {
    attrs: {
      "href": "mailto:findsomecoffee@gmail.com"
    }
  }, [_vm._v("findsomecoffee@gmail")])])])
}]}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    class: _vm.klass,
    style: (_vm.style),
    attrs: {
      "version": "1.1",
      "role": _vm.label ? 'img' : 'presentation',
      "aria-label": _vm.label,
      "x": _vm.x,
      "y": _vm.y,
      "width": _vm.width,
      "height": _vm.height,
      "viewBox": _vm.box
    }
  }, [_vm._t("default", [(_vm.icon && _vm.icon.paths) ? _vm._l((_vm.icon.paths), function(path, i) {
    return _c('path', _vm._b({
      key: ("path-" + i)
    }, 'path', path, false))
  }) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.icon.polygons) ? _vm._l((_vm.icon.polygons), function(polygon, i) {
    return _c('polygon', _vm._b({
      key: ("polygon-" + i)
    }, 'polygon', polygon, false))
  }) : _vm._e(), _vm._v("\b\n    "), (_vm.icon && _vm.icon.raw) ? [_c('g', {
    domProps: {
      "innerHTML": _vm._s(_vm.raw)
    }
  })] : _vm._e()])], 2)
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "spacer"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "border-top",
    attrs: {
      "id": "menu"
    }
  }, [_c('SomeIcon', {
    staticClass: "svg-icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "menu-option"
  }, [_c('router-link', {
    attrs: {
      "to": "/nearby"
    }
  }, [_vm._v("nearby")])], 1), _vm._v(" "), _c('span', {
    staticClass: "menu-option"
  }, [_c('router-link', {
    attrs: {
      "to": "/cities"
    }
  }, [_vm._v("cities")])], 1), _vm._v(" "), _c('span', {
    staticClass: "menu-option"
  }, [_c('router-link', {
    attrs: {
      "to": "/whats-good"
    }
  }, [_vm._v("feed")])], 1), _vm._v(" "), _c('span', {
    staticClass: "menu-option"
  }, [_c('router-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("about")])], 1)], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "header"
    }
  }, [_c('div')])
}]}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('v-dialog'), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm._self.$root.$data.loading),
      expression: "_self.$root.$data.loading"
    }],
    staticClass: "fa-icon-xl spinner"
  }), _vm._v(" "), _c('div', {
    staticClass: "city-names"
  }, [(_vm.cityListActive) ? _c('button', {
    staticClass: "toggle",
    on: {
      "click": function($event) {
        _vm.toggleVisibility()
      }
    }
  }, [_c('icon', {
    staticClass: "fa-icon-md",
    class: {
      active: _vm.cityListActive
    },
    attrs: {
      "name": "angle-up"
    }
  })], 1) : _c('button', {
    staticClass: "toggle",
    on: {
      "click": function($event) {
        _vm.toggleVisibility()
      }
    }
  }, [_c('icon', {
    staticClass: "fa-icon-md",
    class: {
      active: _vm.cityListActive
    },
    attrs: {
      "name": "angle-down"
    }
  })], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.cityListActive) ? _c('ul', {
    class: {
      active: _vm.cityListActive
    },
    attrs: {
      "id": "cityList"
    }
  }, _vm._l((this.$root.$data.cities), function(city) {
    return _c('li', {
      staticClass: "city"
    }, [_c('button', {
      staticClass: "btn round",
      class: {
        'active': _vm.isThisTheCurrentCity(city)
      },
      on: {
        "click": function($event) {
          _vm.selectCity(city)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(city.display) + "\n\t\t\t\t\t")])])
  })) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "list-group"
  }, [_c('ul', {
    staticClass: "items"
  }, _vm._l((_vm.items), function(item) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "thumb",
      style: ({
        backgroundImage: 'url(' + item.image_url + ')'
      }),
      on: {
        "click": function($event) {
          _vm.getItemDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "item-title"
    }, [_c('h4', {
      staticClass: "list-group-item-heading"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.review_count) ? _c('h5', {
      staticClass: "list-group-item-text"
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.review_count) + " reviews\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (item.rating) ? _c('div', [_c('star-rating', {
      attrs: {
        "star-size": 20,
        "rating": item.rating,
        "show-rating": false,
        "border-width": 0,
        "increment": 0.1,
        "read-only": true
      }
    })], 1) : _vm._e()]), _vm._v(" "), (item.rating) ? _c('div', {
      staticClass: "thumb-spacer"
    }) : _vm._e(), _vm._v(" "), (item.rating) ? _c('div', {
      staticClass: "mini-action-bar"
    }) : _vm._e()])])
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm._self.$root.$data.loading),
      expression: "_self.$root.$data.loading"
    }],
    staticClass: "fa-icon-xl spinner"
  }), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "juicer-feed",
    attrs: {
      "data-feed-id": "findsomecoffee"
    }
  }, [_c('h1', {
    staticClass: "referral"
  }, [_c('a', {
    attrs: {
      "href": "https://www.juicer.io"
    }
  }, [_vm._v("Powered by Juicer")])])])
}]}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('v-dialog'), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.$root.$data.loading),
      expression: "this.$root.$data.loading "
    }],
    staticClass: "fa-icon-xl spinner"
  }), _vm._v(" "), _c('div', {
    staticClass: "list-group"
  }, [_c('ul', {
    staticClass: "items"
  }, _vm._l((this.$root.$data.items), function(item) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "thumb",
      style: ({
        backgroundImage: 'url(' + item.image_url + ')'
      }),
      on: {
        "click": function($event) {
          _vm.getItemDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "item-title"
    }, [_c('h4', {
      staticClass: "list-group-item-heading"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.review_count) ? _c('h5', {
      staticClass: "list-group-item-text"
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.review_count) + " reviews\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (item.review_count) ? _c('h5', {
      staticClass: "list-group-item-text"
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.distance) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (item.rating) ? _c('div', [_c('star-rating', {
      attrs: {
        "star-size": 20,
        "rating": item.rating,
        "show-rating": false,
        "border-width": 0,
        "increment": 0.1,
        "read-only": true
      }
    })], 1) : _vm._e()]), _vm._v(" "), (item.rating) ? _c('div', {
      staticClass: "thumb-spacer"
    }) : _vm._e(), _vm._v(" "), (item.rating) ? _c('div', {
      staticClass: "mini-action-bar"
    }) : _vm._e()])])
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 826.04304 629"}},[_c('title',[_v("fsc-logo")]),_c('path',{attrs:{"d":"M627.371 460.846C557.44 588.876 434.031 629 357.644 629c-79.615 0-210.95-24.705-297.26-174.609C-21.381 312.375 3.592 159.436 3.592 159.436s56.414 152.362 348.456 152.362c310.072 0 336.573-142.362 336.573-142.362s24.366 134.67-61.249 291.41z","fill":"#53c1cc","fill-rule":"evenodd"}}),_c('g',{attrs:{"fill":"#53c1cc","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M826.043 140.943s-7.354-64.642-71.562-48.178C703.253 105.9 689.02 154.88 689.02 154.88s-5.264-27.62-8.062-35.764c-8.637-25.132 5.516-63.873 51.298-70.915 91.466-14.069 93.741 92.964 93.787 92.741z"}}),_c('path',{attrs:{"d":"M768.441 228.38c-43.08 27.54-69.33 55.734-69.33 55.734s3.585-28.8 4.364-51.82c.473-13.99 37.54-32.328 62.103-47.516 40.51-25.05 36.507-65.322 36.507-65.322s16.44 20.429 16.395 43.459c-.04 20.258-3.862 35.947-50.039 65.465z"}})]),_c('path',{attrs:{"d":"M666.75 134.431c0 78.423-119.63 147.516-312.754 147.516-176.754 0-333.963-69.093-333.963-147.516C20.033 68 169.243 0 345.996 0 549.12 0 666.75 62 666.75 134.431z","fill":"#c59a7b","fill-rule":"evenodd"}}),_c('g',{attrs:{"fill":"#efe0d3","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M423.578 102.241c-24.45 18.596-42.627 40.792-59.265 62.22-28.134-22.38-49.083-29.249-100.827-64.829-50.367-34.632 40.075-42.773 88.788-.13 38.824-52.923 125.434-38.43 71.304 2.74z"}}),_c('path',{attrs:{"d":"M389.357 53.575C376.382 64.79 359.6 75.5 350.587 88.062c-15.138-13.042-28.408-17.132-58.696-34.57-33.452-19.26 23.939-38.752 50.142-13.893 15.645-26.64 78.649-13.098 47.324 13.976z"}})]),_c('path',{attrs:{"d":"M170.688 79.047c-3.393-1.826-60.835 10.595-72.147 42.75-10.742 30.539 28.457 72.396 97.397 98.538 60.785 23.049 135.02 19.887 163.708 27.983 6.61 1.865 15.583 14.055 15.583 14.055s4.82-14.439 13.846-17.436c8.951-2.973 46.194-8.993 101.865-26.757 93.597-29.866 158.058-73.558 94.462-120.86-38.31-28.495-67.86-30.78-69.799-29.391-4.905 3.516 23.942 4.358 52.252 31.063 60.377 56.951-28.06 81.504-89.026 102.515-63.868 22.012-77.889 17.755-92.871 25.767-2.982 1.594-13.442 10.65-13.442 10.65s-9.845-7.11-18.358-9.251c-19.383-4.876-59.955-3.57-109.207-14.957-60.542-13.997-128.797-44.663-125.426-89.437 2.48-32.935 57.252-41.956 51.163-45.232z","fill":"#efe0d3","fill-rule":"evenodd"}}),_c('path',{attrs:{"d":"M365.699 175.433S375.119 159 391.619 148c33.502-22.335 47.002-25.34 62-35.5 15.5-10.5 28.501-29.39 28.501-29.39s18.395 29.62.23 62.118c-8.805 15.755-25.42 27.799-50.918 39.518s-44.976 18.677-50.268 28.036-8.686 14.434-8.686 14.434a181.861 181.861 0 0 1-16.4-14.006c-8.193-7.942-26.431-9.802-51.957-13.693s-59.874-18.203-78.665-38.177-13.92-67.756-13.92-67.756 17.165 27.022 61.705 38.1 46.578 14.076 63.545 22.74a120.629 120.629 0 0 1 28.913 21.009z","fill":"#efe0d3","fill-rule":"evenodd"}})])}}};

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[27]);
//# sourceMappingURL=app.698d80e11c0695eb6fdc.js.map