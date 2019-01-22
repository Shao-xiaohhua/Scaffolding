// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
// import elem from './element/element'
import router from './router'

import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'

Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // elem,
  template: '<App/>',
  components: { App }
})
