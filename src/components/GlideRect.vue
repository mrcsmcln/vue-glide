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
    callback: 'update'
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      if (!this.callback) {
        return
      }

      this.callback(this.$el.getBoundingClientRect())
      window.requestAnimationFrame(this.update)
    }
  }
}
</script>
