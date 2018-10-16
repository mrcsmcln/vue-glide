<template>
  <main>
    <code v-text="position"/>
    <GlidePosition :callback="callback">
      <div/>
    </GlidePosition>
  </main>
</template>

<script>
import GlidePosition from '../../src/components/GlidePosition.vue'

export default {
  components: { GlidePosition },
  data () {
    return {
      position: undefined
    }
  },
  methods: {
    callback (position) {
      this.position = position
    }
  }
}
</script>

<style>
main {
  margin: 0;
  padding: 100vh 100vw;
  /*width: 500vw;*/
  /*height: 150vh;*/
  width: 25vw;
  height: 25vh;
}
div {
  width: 100%;
  height: 100%;
  background-color: #888;
}

code {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
