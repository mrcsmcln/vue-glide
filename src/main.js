import GlideRect from './components/GlideRect.vue'
import GlidePivot from './components/GlidePivot.vue'
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
  Vue.component('GlidePivot', GlidePivot)
  Vue.component('GlidePosition', GlidePosition)
  Vue.component('GlideAnimation', GlideAnimation)
  Vue.component('GlideVisibility', GlideVisibility)
  Vue.component('GlideIntersection', GlideIntersection)
}

export default {
  install,
  GlideRect,
  GlidePivot,
  GlidePosition,
  GlideAnimation,
  GlideVisibility,
  GlideIntersection
}
