<template>
  <div id="app">
    <h1>Vue Glide Translation Example</h1>
    <p>Scroll down and to the right</p>
    <p>
      x: {{ x }}
      <br>
      y: {{ y }}
    </p>
    <div class="container" ref="container">
      <div class="inner">
        <!-- <div class="container-2"> -->
          <!-- <div class="absolute"> -->
            <GlideTranslation :root="root" @update="update">
            <!-- <GlideTranslation @update="update"> -->
              <div class="div">
                x: {{ x }}
                <br>
                y: {{ y }}
              </div>
            </GlideTranslation>
          </div>
        <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleTranslation',
  data() {
    return {
      x: undefined,
      y: undefined,
      root: null,
    }
  },
  mounted() {
    this.root = this.$refs.container
  },
  methods: {
    update({ x, y }) {
      // console.log('logging', this.$refs.container);
      this.x = x.toFixed(3)
      this.y = y.toFixed(3)
    }
  }
}
</script>

<style>
body {
  margin-top: 300px;
}

.container {
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
  background-color: #eee;
}

.container-2 {
  height: 40vh;
  overflow-y: scroll;
  background-color: #ddd;
  box-sizing: border-box;
  padding: 20vh 0;
}

.inner {
  padding: 100vh 0;
  /*width: calc(100vw + 400px);*/
  height: calc(100vh + 400px);
  /*position: relative;*/
}

.absolute {
  position: absolute;
}

.div {
  /*position: absolute;*/
  top: 100vh;
  /*left: 100vw;*/
  background-color: #ccc;
  padding: 100px;
  height: 200px;
  width: 200px;
}
</style>
