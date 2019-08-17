import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//UL组件
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI


import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 