<script>
import render from '../mixins/render'

export default {
  name: 'GlideAnimation',
  mixins: [render],
  props: {
    keyframes: {
      type: Object,
      default: null
    },
    options: {
      type: [Number, Object],
      default: null
    },
    startTime: {
      type: Number,
      default: null
    },
    currentTime: {
      type: Number,
      default: null
    },
    playbackRate: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      animation: undefined
    }
  },
  watch: {
    startTime (startTime) {
      this.animation.startTime = startTime
    },
    currentTime (currentTime) {
      this.animation.currentTime = currentTime
    },
    playbackRate (playbackRate) {
      const { animation } = this

      animation.playbackRate = playbackRate

      animation[playbackRate ? 'play' : 'pause']()
    }
  },
  mounted () {
    const { startTime, currentTime, playbackRate } = this
    const animation = this.$el.animate(this.keyframes, this.options)

    animation.playbackRate = playbackRate

    if (!playbackRate) {
      animation.pause()
    }

    if (startTime !== null) {
      animation.startTime = startTime
    }

    if (currentTime !== null) {
      animation.currentTime = currentTime
    }

    animation.addEventListener('finish', () => this.$emit('finish'))
    animation.addEventListener('cancel', () => this.$emit('cancel'))

    this.animation = animation
  }
}
</script>
