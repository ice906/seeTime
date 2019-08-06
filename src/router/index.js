import Vue from 'vue'
import Router from 'vue-router'


import home from './homeRouter'
import dictum from './diagramRouter'
import diagram from './dictumRouter'

Vue.use(Router)

  const routes = [
    home,
    dictum,
    diagram,
    
  ];

export default new Router({
  mode: 'history',
  routes
})