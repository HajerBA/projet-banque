

import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import '../node_modules/font-awesome/scss/font-awesome.scss'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
