<template>
  <GlideRect :callback="update">
    <slot/>
  </GlideRect>
</template>

<script>
import GlideRect from './GlideRect.vue'

export default {
  name: 'GlidePosition',
  components: { GlideRect },
  props: {
    callback: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      rect: undefined,
      previousPosition: undefined
    }
  },
  computed: {
    top () {
      const { rect } = this

      return rect.bottom / rect.height
    },
    right () {
      const { rect } = this

      return (rect.right - window.innerWidth) / rect.width
    },
    bottom () {
      const { rect } = this

      return (rect.bottom - window.innerHeight) / rect.height
    },
    left () {
      const { rect } = this

      return rect.right / rect.width
    },
    innerWidth () {
      const { rect } = this

      return rect.left / (window.innerWidth - rect.width)
    },
    innerHeight () {
      const { rect } = this

      return rect.top / (window.innerHeight - rect.height)
    },
    outerWidth () {
      const { rect } = this

      return rect.right / (window.innerWidth + rect.width)
    },
    outerHeight () {
      const { rect } = this

      return rect.bottom / (window.innerHeight + rect.height)
    },
    position () {
      return {
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        left: this.left,
        innerWidth: this.innerWidth,
        innerHeight: this.innerHeight,
        outerWidth: this.outerWidth,
        outerHeight: this.outerHeight
      }
    }
  },
  methods: {
    update (rect) {
      this.rect = rect

      this.callback(this.position)
    }
  }
}
</script>
