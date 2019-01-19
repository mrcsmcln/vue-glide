<template>
  <GlideRect :callback="callback ? setRect : null">
    <slot/>
  </GlideRect>
</template>

<script>
import GlideRect from './GlideRect.vue'

export default {
  name: 'GlidePointer',
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
    clientX () {
      return this.mouse.clientX / window.innerWidth
    },
    clientY () {
      return this.mouse.clientY / window.innerHeight
    },
    offsetX () {
      const { rect } = this

      return (this.mouse.clientX - rect.left) / rect.width
    },
    offsetY () {
      const { rect } = this

      return (this.mouse.clientY - rect.top) / rect.height
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
    distanceX () {
      const { rect } = this

      return this.mouse.clientX - (rect.left + (rect.width / 2))
    },
    distanceY () {
      const { rect } = this

      return this.mouse.clientY - (rect.top + (rect.height / 2))
    },
    distance () {
      return Math.hypot(this.distanceX, this.distanceY)
    },
    maxDistance () {
      const { abs } = Math
      const { rect } = this
      const x = rect.width / 2
      const y = rect.height / 2
      const angle = this.angle - Math.PI / 2

      return abs(Math.tan(angle)) <= (y / x)
        ? x / abs(Math.cos(angle))
        : y / abs(Math.sin(angle))
    },
    majorDistance () {
      const { rect } = this

      return this.distance / (Math.max(rect.width, rect.height) / 2)
    },
    minorDistance () {
      const { rect } = this

      return this.distance / (Math.min(rect.width, rect.height) / 2)
    },
    adjustedDistance () {
      return this.distance / this.maxDistance
    },
    pointer () {
      return {
        phase: this.phase,
        clientX: this.clientX,
        clientY: this.clientY,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        majorDistance: this.majorDistance,
        minorDistance: this.minorDistance,
        adjustedDistance: this.adjustedDistance
      }
    }
  },
  watch: {
    callback (callback) {
      const { setMouse } = this

      if (!callback) {
        window.removeEventListener('mousemove', setMouse)

        return
      }

      window.addEventListener('mousemove', setMouse)
    },
    pointer (pointer) {
      this.callback(pointer)
    }
  },
  mounted () {
    if (this.callback) {
      window.addEventListener('mousemove', this.setMouse)
    }
  },
  methods: {
    setRect (rect) {
      this.rect = rect
    },
    setMouse (mouse) {
      this.mouse = mouse
    }
  }
}
</script>
