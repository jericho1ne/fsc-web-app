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
			<button v-if="isActive" 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-up" 
					class="fa-icon-lg"
   					v-bind:class="{ active: isActive }"></icon>
   			</button>
			<button v-else 
				@click="toggleVisibility()" 
				class="toggle"
			>
				<icon name="angle-down" 
					class="fa-icon-lg"
					v-bind:class="{ active: isActive }"></icon>
    		</button>
			
			<transition name="fade">
				<!-- City List  -->
				<ul 
					v-if="isActive"
					id="cityList" 
					v-bind:class="{ active: isActive }" 
					class=""
				>
					<li v-for="city in cities" class="city">	
						<button 
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
							<!-- <img :src="" /> -->
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
							<icon name="bookmark" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="compass" class="fa-icon-md" style="fill:#fff"></icon>
							<icon name="share-square" class="fa-icon-md" style="fill:#fff"></icon>
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
			isActive: true,
			items: [
				// { name: ' * Searching Nearby *', rating: '', review_count: '' },
			],
			cities: [
				{ 
					name: 'Seattle',
					display: 'Seattle',
					state: 'WA',
				},
				{ 
					name: 'Portland',
					display: 'Portland',
					state: 'OR',
				},
				{ 
					name: 'San Francisco',
					display: 'San Francisco',
					state: 'CA',
				},
				{ 
					name: 'Santa Barbara',
					display: 'Santa Barbara',
					state: 'CA',
				},
				{ 
					name: 'Santa Monica',
					display: 'Santa Monica',
					state: 'CA',
				},
				{ 
					name: 'Los Angeles',
					display: 'LA',
					state: 'CA',
				},
				{ 
					name: 'Culver City',
					display: 'Culver City',
					state: 'CA',
				},
				{ 
					name: 'Mission Viejo',
					display: 'Mission Viejo',
					state: 'CA',
				},
				{ 
					name: 'San Diego',
					display: 'San Diego',
					state: 'CA',
				},
				{ 
					name: 'East Lansing',
					display: 'East Lansing',
					state: 'MI',
				},
				{ 
					name: 'Chicago',
					display: 'CHI',
					state: 'IL',
				},
				{ 
					name: 'New York',
					display: 'NYC',
					state: 'NY',
				},
				{ 
					name: 'Melbourne',
					display: 'Melbourne',
					state: 'VIC',
				},
				{ 
					name: 'Sydney',
					display: 'Sydney',
					state: 'NSW',
				},
			],
		}
	},
	created: function () {
	}, 
	mounted: function () {
		console.log(` ** ${this.$options.name} mounted **`);
	},
	
	methods: {
		/**
		 * Ajax call to search by city name
		 * @param  {[type]} params     [description]
		 * @return {[type]}            [description]
		 */
		selectCity: function(city) {
			var _self = this;

			let selectedCity = city.name + ', ' + city.state;
			//console.log(" selectCity called :: " + selectedCity)

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

			_self.$root.fetchData(urlParams).then(response => {
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
					// Hide city selection buttons
					this.toggleVisibility();
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
            this.isActive = !this.isActive;
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
</style>
