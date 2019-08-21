
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from "./modules/login"
import home from './modules/home'
// import footer from './modules/footer'
export default new Vuex.Store({
  modules: {
      login,
      home,
      // footer,
  }
})
