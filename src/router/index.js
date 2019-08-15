import Vue from 'vue'
import Router from 'vue-router'

import home from './homeRouter'
import diagram from './diagramRouter'
import dictum from './dictumRouter'
import setting from "./settingRouter"

Vue.use(Router);

const routes = [
  home,
  diagram,
  dictum,
  setting,
  {
    path: '/',
    redirect:'/home'
  }
];

export default new Router({
  mode: 'history',
  routes
});
