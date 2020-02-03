import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYWRpbiBTYWxpbSIsImVtYWlsIjoiYWxhZGluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODA2ODI3MzIsImV4cCI6MTU4MDk0MTkzMn0.JCtYm_LB7OL0UyCciLCbr4m802129Nhgj-sR1IBtAGw'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')