<template>
  <main>
    <div class="options">
      <label>
        rootMargin
        <input v-model="rootMargin">
      </label>
      <ul>
        <li
          v-for="(value, index) in threshold"
          :key="index"
        >
          <input
            v-model.number="threshold[index]"
            step="0.1"
            min="0"
            max="1"
            type="number"
          >
          <button
            v-if="threshold.length > 1"
            @click="threshold.splice(index, 1)"
          >−</button>
          <button
            @click="threshold.splice(index + 1, 0, value)"
          >+</button>
        </li>
      </ul>
    </div>
    <GlideIntersection
      :callback="callback"
      :options="options"
    >
      <div class="target"/>
    </GlideIntersection>
  </main>
</template>

<script>
import GlideIntersection from '../../src/components/GlideIntersection.vue'

export default {
  components: { GlideIntersection },
  data () {
    return {
      rootMargin: '0px',
      threshold: [0]
    }
  },
  computed: {
    options () {
      return {
        rootMargin: this.rootMargin,
        threshold: this.threshold
      }
    }
  },
  methods: {
    callback (entry) {
      // eslint-disable-next-line no-console
      console.log(entry)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.options {
  position: fixed;
  top: 0;
  left: 0;
}

.target {
  margin: 150vh auto;
  height: 50vh;
  background-color: hsl(0, 0%, 50%);
}
</style>
