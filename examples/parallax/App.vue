<template>
  <main>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officiis sequi, dolores cum nam quibusdam est beatae sapiente aperiam aut aspernatur deleniti a numquam repudiandae tenetur saepe, totam ad? Ullam?</p>
    <GlideParallax translate="50%">
      <img
        src="https://source.unsplash.com/1080x720"
        alt=""
      >
    </GlideParallax>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati a tempora et, delectus aperiam autem beatae quos. Nostrum nemo totam quia eligendi, officia similique repudiandae ipsam aliquid doloremque, magnam praesentium.</p>
  </main>
</template>

<script>
import GlideParallax from '../../src/components/GlideParallax.vue'

export default {
  components: { GlideParallax }
}
</script>

<style>
body {
  margin-top: 300vh;
  margin-bottom: 300vh;
}

img {
  position: relative;
  z-index: -1;
  max-width: 100%;
}
</style>
