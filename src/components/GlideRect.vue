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
    callback (callback) {
      if (callback) {
        this.update()
      }
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      this.callback(this.$el.getBoundingClientRect())

      if (this.callback) {
        window.requestAnimationFrame(this.update)
      }
    }
  }
}
</script>
