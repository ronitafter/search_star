import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueDebounce from 'vue-debounce'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(vueDebounce, {
  listenTo: 'input'
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
