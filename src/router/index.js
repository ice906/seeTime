import Vue from 'vue'
import Router from 'vue-router'

import home from './homeRouter'
import diagram from './diagramRouter'
import dictum from './dictumRouter'

Vue.use(Router);
 
const routes = [
  home,
  diagram,
  dictum,
  {
    path: '/',
    redirect:'/index'
  }
];

export default new Router({
  mode: 'history',
  routes
});
