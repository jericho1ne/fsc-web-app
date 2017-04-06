
//
// Components
// 


// Architectural
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Already in Global scope: Icon and StarRating

// Pages 
import SearchNearby from 'components/SearchNearby'
import SearchByCity from 'components/SearchByCity'
import About from 'components/About'

// Define the URL routes
const routes = [
	{ path: '/', component: SearchNearby },
	{ path: '/nearby', component: SearchNearby },
	{ path: '/cities', component: SearchByCity },
	{ path: '/about', component: About },
]

export default new VueRouter({
	routes,
	mode: 'history',
})
