<template>
	<div class="">
		<!-- <input type="text" v-model="msg" /> -->
		<!-- <icon name="circle" class="fa-icon-xs"></icon>
		<icon name="circle" class="fa-icon-sm"></icon>
		<icon name="circle" class="fa-icon-md"></icon>
		<icon name="circle" class="fa-icon-lg"></icon>
		<icon name="circle" class="fa-icon-xl"></icon> -->
		
		<div class="border-bottom" >		

			<!-- Toggle button  -->
			<button v-if="cityListActive" 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-up" 
					class="fa-icon-lg"
					v-bind:class="{ active: cityListActive }"></icon>
			</button>
			<button v-else 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-down" 
					class="fa-icon-lg"
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
					<li v-for="city in cities" class="city">	
						<button 
							:class="{ 'button-selected': isThisTheCurrentCity(city) }"
							class="btn primary"
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
	name: 'SearchByCity',
	data () {
		return {
			cityListActive: true,
			currentCity: '',
			items: [
				// { name: ' * Searching Nearby *', rating: '', review_count: '' },
			],
			cities: [],
		}
	},
	created: function () {
	}, 
	mounted: function () {
		var _self = this;
		_self.$root.fetchDataFromApi('cities', '')
			.then(response => {
				// Set the displayed cities to the AJAX response
				if (typeof response.body === 'object') {
					_self.cities = response.body;
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
			const thisIsTheCurrentCity = this.currentCity === (city.name + ', ' + city.state);
			return thisIsTheCurrentCity;
		},

		/**
		 * Ajax call to search by city name
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		selectCity: function(city) {
			var _self = this;
			let selectedCity = city.name + ', ' + city.state;
			_self.currentCity = selectedCity;

			// Remove existing list of shops, display loading message
			_self.items = [{ name: ' * Searching in ' + selectedCity + ' *', rating: '', review_count: '' }];
			
			// Hide city selection buttons
			this.toggleVisibility();

			// Ajax request to places API
			let urlParams = 
				`term=coffee&` + 
				`location=${selectedCity}&` +
				// List of comma delimited pricing levels (1,2,3,4)
				`price=1,2,3,4&` +
				// defaults to best_match
				// { best_match, rating, review_count, distance }
				`sort_by=review_count&` +
				`limit=40`;

			_self.$root.fetchDataFromApi('search', urlParams).then(response => {
				// Set the displayed item to the AJAX response
				if (typeof response.body.businesses === 'object') {
					const items = response.body.businesses;

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
	.fade-enter-active, .fade-leave-active {
		transition: all 0.15s ease;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		opacity: 0;
	}
	.button-selected {
		background-color: #BC0C0C;
	}
</style>
