<template>
  <main>
    <div class="absolute pin-t pin-l p-4 leading-loose">
      <label>
        <input
          v-model="showPivotEffect"
          type="checkbox"
        >
        Show Pivot Effect
      </label>
      <label>
        <input
          v-model="showDistanceGuides"
          type="checkbox"
        >
        Show Distance Guides
      </label>
    </div>
    <GlidePivot :callback="update">
      <div
        :style="style"
        class="wrapper"
      >
        <pre v-text="text" />
        <template v-if="showDistanceGuides">
          <div class="distance distance-major" />
          <div class="distance distance-minor" />
          <div class="distance distance-edge" />
        </template>
      </div>
    </GlidePivot>
  </main>
</template>

<script>
import GlidePivot from '../src/components/GlidePivot.vue'

export default {
  components: { GlidePivot },
  data () {
    return {
      pivot: {},
      showPivotEffect: false,
      showDistanceGuides: false
    }
  },
  computed: {
    x () {
      return this.pivot.elementX - 0.5
    },
    y () {
      return this.pivot.elementY - 0.5
    },
    angle () {
      return this.pivot.majorDistance / 100
    },
    rotate3d () {
      return `rotate3d(${-this.y}, ${this.x}, 0, ${this.angle}turn)`
    },
    style () {
      if (!this.showPivotEffect) {
        return null
      }

      return { transform: `${this.rotate3d}` }
    },
    text () {
      return JSON.stringify(this.pivot, this.replacer, 2)
    }
  },
  methods: {
    update (pivot) {
      this.pivot = pivot
    },
    replacer (key, value) {
      if (typeof value === 'number') {
        return parseFloat(value.toFixed(3))
      }

      return value
    }
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;

html {
  height: 100%;
}

body {
  height: 100%;
}

main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  perspective: 500px;
}

label {
  display: block;
}

pre {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0.5em 1em;
  line-height: 2;
  width: 400px;
  background-color: whitesmoke;
}

.controls {
  position: absolute;
  top: 0;
  left: 0;
}

.wrapper {
  position: relative;
  transform-origin: center center -500px;
}

.distance,
.distance::after {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  border-width: 1px;
  border-style: solid;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
}

.distance::after {
  display: block;
  width: calc(200% + 2px);
  height: calc(200% + 2px);
  content: "";
  border: inherit;
  border-radius: inherit;
}

.distance-major {
  width: 400px;
  height: 400px;
  border-color: #f00;
}

.distance-minor {
  width: 336px;
  height: 336px;
  border-color: #0f0;
}

.distance-edge {
  width: 100%;
  height: 100%;
  border-color: #00f;
  border-radius: 0;
}

@tailwind utilities;
</style>
