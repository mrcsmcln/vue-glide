import Vue from 'vue'
import VueGlide from 'vue-glide'
import ExampleIntersection from './ExampleIntersection.vue';

Vue.use(VueGlide)

new Vue({
  el: '#app',
  render: h => h(ExampleIntersection)
})
