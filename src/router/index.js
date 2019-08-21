import Vue from 'vue'
import Router from 'vue-router'
import osm from '@/components/osm'
import loader from '@/components/loader'
import home from '@/components/home'
import settings from '@/components/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loader',
      component: loader
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/osm',
      name: 'osm',
      component: osm
    }
  ]
})
