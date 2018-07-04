export default {
  abstract: true,
  props: {
    root: {
      type: Element,
      default: null
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    threshold: {
      type: [Number, Array],
      default: () => [0]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isIntersecting: undefined,
      intersectionObserver: undefined
    }
  },
  computed: {
    options() {
      return {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold instanceof Array
          ? this.threshold.slice(0) : this.threshold
      }
    }
  },
  watch: {
    options: {
      immediate: true,
      handler() {
        if (this.disabled) {
          return
        }

        if (this.intersectionObserver) {
          this.disconnect()
        }

        this.create()

        if (!this.$el) {
          return
        }

        this.observe()
      }
    },
    disabled(disabled) {
      if (this.disabled) {
        this.disconnect()

        return
      }

      this.create()
      this.observe()
    }
  },
  mounted() {
    if (this.disabled) {
      return
    }

    this.observe()
  },
  methods: {
    create() {
      this.intersectionObserver = new IntersectionObserver(
        this.callback,
        this.options
      )
    },
    observe() {
      this.intersectionObserver.observe(this.$el)
    },
    disconnect() {
      this.intersectionObserver.disconnect()
    },
    reset(newVal, oldVal) {
      this.disconnect()
      this.create()
      this.observe()
    },
    callback([entry]) {
      const { isIntersecting } = entry

      if (this.isIntersecting !== isIntersecting) {
        this.isIntersecting = isIntersecting

        this.$emit(isIntersecting ? 'enter' : 'leave', entry)
      }

      this.$emit('intersect', entry)
    }
  },
  render() {
    return this.$slots.default[0]
  }
}
