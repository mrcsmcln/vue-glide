import GlideRect from './components/GlideRect.vue'
import GlideParallax from './components/GlideParallax.vue'
import GlidePosition from './components/GlidePosition.vue'
import GlideAnimation from './components/GlideAnimation.vue'
import GlideVisibility from './components/GlideVisibility.vue'
import GlideIntersection from './components/GlideIntersection.vue'

function install (Vue) {
  // if (Vue && _Vue === Vue) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.error('[vue-glide] already installed. Vue.use(VueGlide) should be called only once.')
  //   }

  //   return
  // }

  // Vue = _Vue

  Vue.component('GlideRect', GlideRect)
  Vue.component('GlideParallax', GlideParallax)
  Vue.component('GlidePosition', GlidePosition)
  Vue.component('GlideAnimation', GlideAnimation)
  Vue.component('GlideVisibility', GlideVisibility)
  Vue.component('GlideIntersection', GlideIntersection)
}

export default {
  install,
  GlideRect,
  GlideParallax,
  GlidePosition,
  GlideAnimation,
  GlideVisibility,
  GlideIntersection
}
