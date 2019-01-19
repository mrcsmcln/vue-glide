<script>
import render from '../mixins/render'

export default {
  name: 'GlideIntersection',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      intersectionObserver: undefined
    }
  },
  watch: {
    options: 'reset',
    callback: 'reset'
  },
  mounted () {
    this.create()
    this.observe()
  },
  methods: {
    create () {
      this.intersectionObserver = new IntersectionObserver(
        // no destructuring because Babel freaks out
        (entries) => this.callback(entries)[0],
        this.options
      )
    },
    observe () {
      this.intersectionObserver.observe(this.$el)
    },
    disconnect () {
      this.intersectionObserver.disconnect()
    },
    reset () {
      this.disconnect()
      this.create()
      this.observe()
    }
  }
}
</script>
