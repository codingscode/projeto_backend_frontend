import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYWRpbiBTYWxpbSIsImVtYWlsIjoiYWxhZGluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODE0NTEwMDEsImV4cCI6MTU4MTcxMDIwMX0.xKjpISuLHPhz86BCt69qoGbj2J7be9h50cpQ_UKLPX4'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')