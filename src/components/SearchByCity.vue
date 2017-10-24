<template>
	<div class="">
		<v-dialog/>

		<span 
			v-show="_self.$root.$data.loading" 
			class="fa-icon-xl spinner">
		</span>

		<div class="city-names">		
			<!-- Toggle button  -->
			<button v-if="cityListActive" 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-up" 
					class="fa-icon-md"
					v-bind:class="{ active: cityListActive }"></icon>
			</button>
			<button v-else 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-down" 
					class="fa-icon-md"
					v-bind:class="{ active: cityListActive }"></icon>
			</button>
			
			<transition name="fade">
				<!-- City List  -->
				<ul 
					v-if="cityListActive"
					id="cityList" 
					v-bind:class="{ active: cityListActive }" 
					class=""
				>
					<li v-for="city in this.$root.$data.cities" class="city">	
						<button 
							:class="{ 'active': isThisTheCurrentCity(city) }"
							class="btn round"
							@click="selectCity(city)"
						>
							{{city.display}}
						</button>
					</li>
				</ul>
			</transition>
		</div>
		
		<div class="list-group">
			<ul class="items">
				<li v-for="item in items" class="item">	
					
					<div class="thumb" 
						v-bind:style="{ backgroundImage: 'url(' + item.image_url + ')' }"
						@click="getItemDetail(item.id)"
					>
						<div class="item-title">
							<h4 class="list-group-item-heading">{{item.name}}</h4>		
							<h5 class="list-group-item-text" v-if="item.review_count">
								{{item.review_count}} reviews
							</h5>
							<div v-if="item.rating">
								<star-rating 
									:star-size="24" 
									:rating="item.rating"
									:show-rating="false"
									:border-width="0"
									:increment="0.1"
									:read-only="true"
								></star-rating>
							 </div>
						</div>
						<div class="thumb-spacer" v-if="item.rating">
						</div>
						
						<div class="mini-action-bar" v-if="item.rating">
							<!-- //click:deleteItem({{index}}) -->
							<!-- <icon name="bookmark" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="compass" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="share-square" class="fa-icon-md" style="fill:#fff"></icon> -->
							<!--
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
	name: 'SearchByCity',
	data () {
		return {
			cityListActive: true,
			currentCity: '',
			items: [
			],
		}
	},
	created: function () {
	}, 
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

		_self.$root.fetchDataFromApi('cities', urlParams)
			.then(response => {
				// Set the displayed cities to the AJAX response
				if (typeof response.body === 'object') {
					// Notify prerender SPA plugin
					document.dispatchEvent(new Event('render-complete')); 

					// Turn off spinner
					_self.$root.$data.loading = false;

					_self.$root.$data.cities = response.body;
				}
				else {
					console.warn("No results.");
				}
			}, response => {
				console.warn("Error grabbing list of cities");
			});
	},
	
	methods: {
		isThisTheCurrentCity: function(city) {
			const thisIsTheCurrentCity = this.currentCity === city.name;
			return thisIsTheCurrentCity;
		},

		/**
		 * Ajax call to search by city name
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		selectCity: function(city) {
			var _self = this;

			let selectedCity = 
				city.name +  
				(city.state !== undefined ? `, ${city.state}` : '') +
				(city.country !== undefined ? `, ${city.country}` : '');

			// Turn on Spinner
			_self.$root.$data.loading = true;

			_self.currentCity = city.name;

			// Remove existing list of shops, display loading message
			_self.items = [{ name: ' * Searching in ' + city.name + ' *', rating: '', review_count: '' }];
			
			// Hide city selection buttons
			this.toggleVisibility();

			// Ajax request to places API
			let urlParams = 
				`term='Coffee-Tea'&` +
				`categories=coffeeroasteries,coffee&` +
				`location=${selectedCity}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=review_count&` +
				`limit=48`;

			_self.$root.fetchDataFromApi('search', urlParams).then(response => {
				// Set the displayed item to the AJAX response
				if (typeof response.body.businesses === 'object') {
					let items = response.body.businesses;
					items = _self.$root.stripCoffeeShops(items);

					// Turn off spinner
					_self.$root.$data.loading = false;

					// Sort based on proximity
					items.sort(function(a, b) {		
						// sort by rating (highest first)
						return parseFloat(a.rating) - parseFloat(b.rating)
							|| a.reviews - b.reviews;
					}).reverse();

					// Update displayed items
					_self.items = items;
				}
				else {
					console.warn("No results.");
				}
			}, response => {
				console.warn("Error");
			});
		}, // End selectCity

		getItemDetail: function(itemid) {
			this.$root.getItemDetail(itemid);
		},

		toggleVisibility: function() {
			this.cityListActive = !this.cityListActive;
		},

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul#cityList {
		margin-top: 0;
		padding: 12px 4px 0px 4px;
		border: 0;
		border-top: 1px solid rgba(10,10,10,.1);
		height: 100%;
		transition: all 0.25s ease;
	}
	.city-names {
		background-color: rgba(255, 255, 255, .7);
		box-shadow: inset 0 0 6rem rgba(10,10,10,.20);
		padding: 0;
		margin: 0;
		border-bottom: 1px solid rgba(10,10,10,.25);
		transition: all .25s ease;
	}
	.fade-enter-active, .fade-leave-active {
		transition: all 0.25s ease;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		opacity: 0;
	}
</style>
