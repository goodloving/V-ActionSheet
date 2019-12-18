import Vue from 'vue'
import App from './App.vue'
import VActionSheet from "./plugins"

Vue.use(VActionSheet)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
