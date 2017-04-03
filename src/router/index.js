import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import SearchNearby from 'components/SearchNearby'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchNearby',
      component: SearchNearby
    }
  ]
})
