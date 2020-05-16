import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//.vue-router

import HomeRouteComponent from './components/home/Index.vue'

//routes
const routes = [
  { path: '/', component: HomeRouteComponent }
  // { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
//.routes

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
