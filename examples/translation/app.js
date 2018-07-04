import Vue from 'vue'
import VueGlide from 'vue-glide'
import ExampleTranslation from './ExampleTranslation.vue'

Vue.use(VueGlide)

new Vue({
  el: '#app',
  render: h => h(ExampleTranslation)
})
