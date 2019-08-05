import Vue from 'vue'
import Router from 'vue-router'


import home from './homeRouter'
import dictum from './dictumRouter'
import diagram from './diagramRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    dictum,
    diagram,
     {
      path: '/',
      redirect: '/home'
    },
    /*
    {
      path: '/about',
      name: 'about',
      
      component: () => import()
    } */
  ]
})
