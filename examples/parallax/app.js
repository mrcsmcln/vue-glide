import Vue from 'vue'
import VueGlide from 'vue-glide'
import ExampleParallax from './ExampleParallax.vue'

Vue.use(VueGlide)

new Vue({
  el: '#app',
  render: h => h(ExampleParallax)
})
