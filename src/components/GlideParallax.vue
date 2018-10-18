<template>
  <GlidePosition :callback="callback">
    <GlideAnimation
      :keyframes="keyframes"
      :options="{ duration: 1, fill: 'both' }"
      :current-time="currentTime"
      :playback-rate="0"
    >
        <slot/>
    </GlideAnimation>
  </GlidePosition>
</template>

<script>
import GlidePosition from './GlidePosition.vue'
import GlideAnimation from './GlideAnimation.vue'
import GlideIntersection from './GlideIntersection.vue'

export default {
  name: 'GlideParallax',
  components: { GlidePosition, GlideAnimation, GlideIntersection },
  props: {
    // TODO:
    // orientation: {
    //   type: String,
    //   default: 'vertical',
    //   validator: orientation => ['horizontal', 'vertical', 'both'].includes(orientation)
    // },
    from: {
      type: String,
      default: '0px'
    },
    to: {
      type: String,
      default: '0px'
    }
  },
  data () {
    return {
      currentTime: 0
    }
  },
  computed: {
    keyframes () {
      return {
        transform: [
          `translateY(${this.from})`,
          `translateY(${this.to})`
        ]
      }
    }
  },
  methods: {
    callback ({ outerHeight }) {
      this.currentTime = outerHeight
    }
  }
}
</script>
