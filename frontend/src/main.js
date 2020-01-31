import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYWRpbiBTYWxpbSIsImVtYWlsIjoiYWxhZGluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODA0MDAwMjMsImV4cCI6MTU4MDY1OTIyM30.H6vuHpQOHHz0ArxokyQjgb4S5aC78SmABrLO_6BzzHA'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')