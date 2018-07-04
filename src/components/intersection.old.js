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
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect()
        }

        this.intersectionObserver = new IntersectionObserver(
          this.callback,
          this.options
        )

        if (this.$el) {
          this.intersectionObserver.observe(this.$el)
        }
      }
    }
  },
  created() {
    this.intersectionObserver = new IntersectionObserver(
      this.callback,
      this.options
    )
  },
  mounted() {
    this.intersectionObserver.observe(this.$el)
  },
  methods: {
    reset(newVal, oldVal) {
      this.intersectionObserver.disconnect()

      this.intersectionObserver = new IntersectionObserver(
        this.callback,
        this.options
      )

      this.intersectionObserver.observe(this.$el)
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
