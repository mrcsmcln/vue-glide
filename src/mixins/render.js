export default {
  render () {
    let children = this.$slots.default

    if (!children) {
      return
    }

    children = children.filter(({ tag }) => tag)

    if (!children.length) {
      return
    }

    // if (process.env.NODE_ENV !== 'production' && children.length > 1) {
    //   // eslint-disable-next-line no-console
    //   console.error(`[vue-glide] <${this.$options.name}> can only be used on a single element.`)
    // }

    return children[0]
  }
}
