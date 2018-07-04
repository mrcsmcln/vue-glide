<template>
  <translation
    :root="root"
    :root-margin="rootMargin"
    :callback="update"
  >
    <component
      :is="is"
      :style="style"
    >
      <slot/>
    </component>
  </translation>
</template>

<script>
  import translation from './translation.vue'
  import dynamicComponent from '../util/dynamic-component'

  export default {
    mixins: [dynamicComponent],
    defaultTag: 'div',
    components: {
      translation
    },
    props: {
      root: {
        type: Element,
        default: null
      },
      rootMargin: {
        type: String,
        default: '0px'
      },
      translateX: {
        type: String,
        default: '0px'
      },
      translateY: {
        type: String,
        default: '0px'
      },
      // offsetX: {
      //   type: String,
      //   default: '0px'
      // },
      // offsetY: {
      //   type: String,
      //   default: '0px'
      // }
    },
    data() {
      return {
        style: undefined
      }
    },
    methods: {
      update({ x, y }) {
        const { translateX, translateY, offsetX, offsetY } = this

        this.style = {
          transform: [
            // `translateX(calc((${translateX} * ${(2 * x) - 1}) + ${offsetX}))`,
            // `translateY(calc((${translateY} * ${(2 * y) - 1}) + ${offsetY}))`
            `translateX(calc(${translateX} * ${(2 * x) - 1}))`,
            `translateY(calc(${translateY} * ${(2 * y) - 1}))`
          ].join(' ')
        }
      }
    }
    // render(createElement) {
    //     return createElement('translation', {
    //         props: {
    //             root: this.root,
    //             rootMargin: this.rootMargin,
    //         },
    //         on: {
    //             update: this.update,
    //         },
    //     }, this.$slots.default);
    // },
  }
</script>
