import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsYWRpbiBTYWxpbSIsImVtYWlsIjoiYWxhZGluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODE3OTU0NzksImV4cCI6MTU4MjA1NDY3OX0.aTRS2LHqMFMAq5Sp_Z6f8NtgqDH2EgvH_MbERQnM1Ls'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')