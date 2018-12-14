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
    keyframes: {
      handler () {
        this.cancel()
        this.init()
      },
      deep: true
    },
    options: {
      handler () {
        this.cancel()
        this.init()
      },
      deep: true
    },
    startTime (startTime) {
      this.animation.startTime = startTime
    },
    currentTime (currentTime) {
      this.animation.currentTime = currentTime
    },
    playbackRate (playbackRate) {
      this.animation.playbackRate = playbackRate
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    cancel () {
      this.animation.cancel()
    },
    finish () {
      this.animation.finish()
    },
    play () {
      this.animation.play()
    },
    pause () {
      this.animation.pause()
    },
    reverse () {
      this.animation.reverse()
    },
    init () {
      this.animation = this.$el.animate(this.keyframes, this.options)

      const { animation, startTime, currentTime, playbackRate } = this

      animation.playbackRate = playbackRate

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
}
</script>
