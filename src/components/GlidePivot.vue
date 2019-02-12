<template>
  <GlideRect :callback="callback ? setRect : null">
    <slot />
  </GlideRect>
</template>

<script>
import GlideRect from './GlideRect.vue'

export default {
  name: 'GlidePivot',
  components: { GlideRect },
  props: {
    callback: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      rect: {},
      mouse: {}
    }
  },
  computed: {
    elementX () {
      const { rect } = this

      return (this.mouse.clientX - rect.left) / rect.width
    },
    elementY () {
      const { rect } = this

      return (this.mouse.clientY - rect.top) / rect.height
    },
    viewportX () {
      return this.mouse.clientX / window.innerWidth
    },
    viewportY () {
      return this.mouse.clientY / window.innerHeight
    },
    distanceX () {
      const { rect } = this

      return this.mouse.clientX - (rect.left + (rect.width / 2))
    },
    distanceY () {
      const { rect } = this

      return this.mouse.clientY - (rect.top + (rect.height / 2))
    },
    angle () {
      const divisor = Math.PI * 2

      return (
        Math.atan2(this.distanceY, this.distanceX) +
        (divisor * 1.25)
      ) % divisor
    },
    phase () {
      return this.angle / (2 * Math.PI)
    },
    distance () {
      return Math.hypot(this.distanceX, this.distanceY)
    },
    maxDistance () {
      const { abs } = Math
      const { rect } = this
      const x = rect.width / 2
      const y = rect.height / 2
      const angle = this.angle - (Math.PI / 2)

      return abs(Math.tan(angle)) <= (y / x)
        ? x / abs(Math.cos(angle))
        : y / abs(Math.sin(angle))
    },
    edgeDistance () {
      return this.distance / this.maxDistance
    },
    majorDistance () {
      const { rect } = this

      return this.distance / (Math.max(rect.width, rect.height) / 2)
    },
    minorDistance () {
      const { rect } = this

      return this.distance / (Math.min(rect.width, rect.height) / 2)
    },
    pointer () {
      return {
        phase: this.phase,
        elementX: this.elementX,
        elementY: this.elementY,
        viewportX: this.viewportX,
        viewportY: this.viewportY,
        edgeDistance: this.edgeDistance,
        majorDistance: this.majorDistance,
        minorDistance: this.minorDistance
      }
    }
  },
  watch: {
    callback: 'init',
    pointer (pointer) {
      this.callback(pointer)
    }
  },
  mounted () {
    this.init(this.callback)
  },
  methods: {
    init (callback) {
      const { setMouse } = this

      if (callback) {
        window.addEventListener('mousemove', setMouse)

        return
      }

      window.removeEventListener('mousemove', setMouse)
    },
    setRect (rect) {
      this.rect = rect
    },
    setMouse (mouse) {
      this.mouse = mouse
    }
  }
}
</script>
