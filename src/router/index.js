import Vue from 'vue'
import Router from 'vue-router'

import SearchNearby from 'components/SearchNearby'
import SearchByCity from 'components/SearchByCity'

Vue.use(Router)

export default new Router({
	components: {
		// Icon and StarRating already global
	},
	routes: [
		{
			path: '/',
			name: 'SearchNearby',
			component: SearchNearby
		},
		{
			path: '/cities',
			name: 'SearchByCity',
			component: SearchByCity
		}
	],
})
