<template>
  <GlidePosition :callback="update">
    <main>
      <GlideAnimation
        :keyframes="keyframes"
        :options="3"
        :current-time="currentTime"
        :playback-rate="0"
      >
        <div class="foo"/>
      </GlideAnimation>
    </main>
  </GlidePosition>
</template>

<script>
import GlidePosition from '../../src/components/GlidePosition.vue'
import GlideAnimation from '../../src/components/GlideAnimation.vue'

export default {
  components: {
    GlidePosition,
    GlideAnimation
  },
  data () {
    return {
      currentTime: 0,
      keyframes: {
        transform: [
          'scale(0) rotate(0turn)',
          'scale(1) rotate(0turn)',
          'scale(1) rotate(0.5turn)',
          'scale(0) rotate(0.5turn)'
        ]
      }
    }
  },
  methods: {
    update ({ top, bottom, innerHeight }) {
      this.currentTime = [top, bottom, innerHeight]
        // make sure the values are between 0 and 1
        .map(value => Math.max(0, Math.min(1, value)))
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.foo {
  margin: 100vh auto;
  width: 50vw;
  height: 50vh;
  background-color: #888;
}
</style>
