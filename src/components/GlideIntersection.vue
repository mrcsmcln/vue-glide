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
    // root: {
    //   type: Element,
    //   default: null
    // },
    // rootMargin: {
    //   type: String,
    //   default: '0px'
    // },
    // threshold: {
    //   type: [Number, Array],
    //   default: 0
    // },
  },
  data () {
    return {
      // isIntersecting: undefined,
      intersectionObserver: undefined
    }
  },
  // computed: {
  //   options () {
  //     return {
  //       root: this.root,
  //       rootMargin: this.rootMargin,
  //       threshold: this.threshold instanceof Array
  //         ? this.threshold.slice(0) : this.threshold
  //     }
  //   }
  // },
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
        // this.callback,
        ([entry]) => this.callback(entry),
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
