import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYWRpbiBTYWxpbSIsImVtYWlsIjoiYWxhZGluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODEyNTc0ODAsImV4cCI6MTU4MTUxNjY4MH0.YSiQqCXigw3ATb7Kqf9zPeaqeMBv30ae4WIrfvECkS0'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')