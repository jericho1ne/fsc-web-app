import Vue from 'vue'
import Router from 'vue-router'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import StarRating from 'components/StarRating'
import SearchNearby from 'components/SearchNearby'

Vue.use(Router)

export default new Router({
	components: {
		Icon,
		StarRating
	},
	routes: [
		{
			path: '/',
			name: 'SearchNearby',
			component: SearchNearby
		}
	],
})
