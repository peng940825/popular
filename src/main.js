// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

import App from './App'
import router from './router'

import './bus'

import Date from './filters/date'
import Currency from './filters/currency'

Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)

Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)

Vue.filter('date', Date)
Vue.filter('currency', Currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    const api = `${process.env.API_PATH}/api/user/check`
    axios.post(api).then((res) => {
      // console.log(res)
      if(res.data.success) {
        next()
      } else {
        next({ path: '/login' })
      }
    })
  } else {
    next()
  }
})
