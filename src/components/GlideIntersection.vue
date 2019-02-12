<script>
import render from '../mixins/render'

export default {
  name: 'GlideIntersection',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      default: null
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      intersectionObserver: null
    }
  },
  watch: {
    callback: 'init',
    options: 'init'
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.intersectionObserver) {
        this.reset()
      }

      if (!this.callback) {
        return
      }

      this.create()
      this.observe()
    },
    reset () {
      this.disconnect()

      this.intersectionObserver = null
    },
    create () {
      this.intersectionObserver = new IntersectionObserver(
        (...args) => this.callback(...args),
        this.options
      )
    },
    observe () {
      this.intersectionObserver.observe(this.$el)
    },
    unobserve () {
      this.intersectionObserver.unobserve(this.$el)
    },
    disconnect () {
      this.intersectionObserver.disconnect()
    }
  }
}
</script>
