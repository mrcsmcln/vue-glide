export default {
  props: {
    tag: {
      type: String,
      default: undefined
    }
  },
  computed: {
    is() {
      return (
        this.tag
        || this.$vnode.data.tag
        || this.$options.defaultTag
        || 'span'
      )
    }
  },
  render(createElement) {
    return createElement(this.is, this.$slots.default)
  }
}
