import Vue from 'vue'
import Router from 'vue-router'

import home from './homeRouter'
import diagram from './diagramRouter'
import dictum from './dictumRouter'
import login from "./loginRouter"

Vue.use(Router);

const routes = [
  home,
  diagram,
  dictum,
  login,
  {
    path: '/',
    redirect:'/home'
  }
];

export default new Router({
  mode: 'history',
  routes
});
