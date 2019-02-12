<template>
  <main>
    <GlidePosition :callback="callback">
      <div ref="box" />
    </GlidePosition>
    <pre v-text="text" />
  </main>
</template>

<script>
import GlidePosition from '../src/components/GlidePosition.vue'

export default {
  components: { GlidePosition },
  data () {
    return {
      position: undefined
    }
  },
  computed: {
    text () {
      return JSON.stringify(this.position, this.replacer, 2)
    }
  },
  mounted () {
    this.$refs.box.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    })
  },
  methods: {
    callback (position) {
      this.position = position
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

main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(200vw + 240px);
  height: calc(200vh + 240px);
}

pre {
  position: fixed;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2;
  padding: 0.5rem 1rem;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

div {
  /* position: absolute; */
  display: flex;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #4fc08d;
  color: #fff;
  user-select: none;
}

@tailwind utilities;
</style>
