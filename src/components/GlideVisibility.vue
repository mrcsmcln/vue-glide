<template>
  <GlideIntersection
    :class="className"
    :callback="callback"
    :options="options"
  >
    <slot/>
  </GlideIntersection>
</template>

<script>
import GlideIntersection from './GlideIntersection.vue'

export default {
  name: 'GlideReveal',
  components: { GlideIntersection },
  props: {
    name: {
      type: String,
      default: 'v'
    },
    // appear: {
    //   type: Boolean,
    //   default: false
    // },
    persist: {
      type: Boolean,
      default: false
    },
    css: {
      type: Boolean,
      default: true
    },
    // type: {
    //   type: String,
    //   default: null,
    //   validator: type => ['transition', 'animation'].includes(type)
    // },
    visibleClass: {
      type: String,
      default: null
    },
    hiddenClass: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      previousIsIntersecting: undefined,
      sides: undefined
    }
  },
  computed: {
    className () {
      if (!this.css) {
        return null
      }

      if (this.previousIsIntersecting) {
        return this.visibleClass ? this.visibleClass : `${this.name}-visible`
      }

      return this.visibleClass ? this.hiddenClass : `${this.name}-hidden`
    }
  },
  methods: {
    callback (entry) {
      const { isIntersecting } = entry

      if (this.previousIsIntersecting === undefined) {
        this.previousIsIntersecting = isIntersecting

        return
      }

      if (isIntersecting === this.previousIsIntersecting) {
        return
      }

      this.previousIsIntersecting = isIntersecting

      this[isIntersecting ? 'enter' : 'leave'](entry)
    },
    enter ({ rootBounds, intersectionRect }) {
      this.$emit('enter')

      if (rootBounds.top === intersectionRect.top) {
        this.$emit('enter-top')
      }

      if (rootBounds.right === intersectionRect.right) {
        this.$emit('enter-right')
      }

      if (rootBounds.bottom === intersectionRect.bottom) {
        this.$emit('enter-bottom')
      }

      if (rootBounds.left === intersectionRect.left) {
        this.$emit('enter-left')
      }
    },
    leave ({ rootBounds, boundingClientRect }) {
      this.$emit('leave')

      if (rootBounds.top > boundingClientRect.top) {
        this.$emit('leave-top')
      }

      if (rootBounds.right < boundingClientRect.right) {
        this.$emit('leave-right')
      }

      if (rootBounds.bottom < boundingClientRect.bottom) {
        this.$emit('leave-bottom')
      }

      if (rootBounds.left > boundingClientRect.left) {
        this.$emit('leave-left')
      }
    }
  }
}
</script>
