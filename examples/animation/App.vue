<template>
  <main>
    <template v-if="mounted">
      <input
        min="0"
        max="5000"
        type="range"
        v-model.number="currentTime"
      >
      <input
        min="0"
        step="100"
        type="number"
        v-model.number="startTime"
      >
      <input
        step="0.25"
        type="number"
        v-model.number="playbackRate"
      >
      <!-- <button @click="$refs.animation.play">Play</button>
      <button @click="$refs.animation.pause">Pause</button>
      <button @click="$refs.animation.finish">Finish</button>
      <button @click="$refs.animation.cancel">Cancel</button> -->
    </template>
    <GlideAnimation
      ref="animation"
      :keyframes="{
        color: ['red', 'blue'],
        transform: ['translateY(50px) rotate(0deg)', 'translateY(0) rotate(45deg)'],
        fontSize: ['1rem', '3rem', '2rem']
      }"
      :options="{ duration: 5000, fill: 'both', id: 'foo' }"
      :current-time="currentTime"
      :playback-rate="playbackRate"
      @finish="finish"
      @cancel="cancel"
    >
      <!-- :start-time="startTime" -->
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
      startTime: 3000,
      currentTime: 0,
      playbackRate: 0,
      keyframes: { color: ['red', 'blue'] },
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
p {
  position: relative;
  z-index: -1;
}
</style>
