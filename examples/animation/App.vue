<template>
  <main>
    <template v-if="mounted">
      <div>
        <label>
          <code>currentTime</code>
          <input
            min="0"
            :max="animation.options.duration"
            type="range"
            v-model.number="animation.currentTime"
          >
        </label>
        <label>
          <code>startTime</code>
          <input
            min="0"
            step="100"
            type="number"
            v-model.number="animation.startTime"
          >
        </label>
        <label>
          <code>playbackTime</code>
          <input
            step="0.25"
            type="number"
            v-model.number="animation.playbackRate"
          >
        </label>
        <label>
          <code>duration</code>
          <input
            step="1000"
            type="number"
            v-model.number="animation.options.duration"
          >
        </label>
      </div>
      <div>
        <button @click="$refs.animation.cancel">Cancel</button>
        <button @click="$refs.animation.finish">Finish</button>
        <button @click="$refs.animation.play">Play</button>
        <button @click="$refs.animation.pause">Pause</button>
        <button @click="$refs.animation.reverse">Reverse</button>
      </div>
    </template>
    <GlideAnimation
      ref="animation"
      v-bind="animation"
      @finish="finish"
      @cancel="cancel"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolorum molestiae praesentium porro voluptates nisi, ipsam aut, ducimus natus deleniti iure eveniet obcaecati expedita facere excepturi amet rerum eum numquam?</p>
    </GlideAnimation>
  </main>
</template>

<script>
import GlideAnimation from '../../src/components/GlideAnimation.vue'

export default {
  components: { GlideAnimation },
  data () {
    return {
      animation: {
        keyframes: {
          color: ['red', 'blue'],
          transform: ['translateY(50px) rotate(0deg)', 'translateY(0) rotate(45deg)'],
          fontSize: ['1rem', '3rem', '2rem']
        },
        options: {
          duration: 5000,
          fill: 'both',
          id: 'foo'
        },
        startTime: 3000,
        currentTime: 0,
        playbackRate: 1
      },
      mounted: false
    }
  },
  mounted () {
    this.mounted = true
  },
  methods: {
    finish () {
      console.log('finish()')
    },
    cancel () {
      console.log('cancel()')
    }
  }
}
</script>

<style>
code,
input {
  display: block;
}

p {
  position: relative;
  z-index: -1;
}
</style>
