import parallax from './components/parallax.vue'
import intersection from './components/intersection'
import translation from './components/translation.vue'

export default function (Vue) {
  Vue.component('GlideParallax', parallax)
  Vue.component('GlideTranslation', translation)
  Vue.component('GlideIntersection', intersection)
}
