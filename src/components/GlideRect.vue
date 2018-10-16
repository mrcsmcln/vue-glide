<script>
import render from '../mixins/render'

export default {
  name: 'GlideRect',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      required: true
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      this.callback(this.$el.getBoundingClientRect())
      window.requestAnimationFrame(this.update)
    }
  }
}
</script>
