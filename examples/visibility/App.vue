<template>
  <main>
    <GlideVisibility
      :options="{ rootMargin: '-10%' }"
      @leave-top="leaveTop"
    >
      <div class="foo"/>
    </GlideVisibility>
  </main>
</template>

<script>
import GlideVisibility from '../../src/components/GlideVisibility.vue'

export default {
  components: { GlideVisibility },
  methods: {
    leaveTop () {
      console.log('leaveTop()')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 150vh;
}

.foo {
  width: 50vw;
  height: 50vh;
  transition-duration: 1000ms;
  transition-property: background-color;
}

.v-visible {
  background-color: green;
}

.v-hidden {
  background-color: red;
}
</style>
