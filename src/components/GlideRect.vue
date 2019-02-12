<script>
import render from '../mixins/render'

export default {
  name: 'GlideRect',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      default: null
    }
  },
  watch: {
    callback (callback, oldCallback) {
      if (callback && oldCallback) {
        return
      }

      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      window.requestAnimationFrame(this.update)
    },
    update () {
      const { callback } = this

      if (!callback) {
        return
      }

      callback(this.$el.getBoundingClientRect())
      this.init()
    }
  }
}
</script>
