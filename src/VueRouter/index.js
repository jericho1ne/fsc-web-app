//
// Components
// 

// Architectural (Icon and StarRating already in global scope)
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

// Installs <router-view> and <router-link>,
// injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

// Google Analytics
Vue.use(VueAnalytics, {
	id: 'UA-106707678-2',
	VueRouter
})

// Pages 
import SearchNearby from 'components/SearchNearby'
import SearchByCity from 'components/SearchByCity'
import Social from 'components/Social'
import About from 'components/About'


// Define the URL routes
const routes = [
	{ path: '/', component: SearchNearby },
	{ path: '/nearby', component: SearchNearby },
	{ path: '/whats-good', component: Social },
	{ path: '/cities', component: SearchByCity },
	{ path: '/about', component: About },
]

export default new VueRouter({
	mode: 'history',
	routes,
})


