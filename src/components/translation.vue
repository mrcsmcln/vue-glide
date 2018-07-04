<template>
  <intersection
    :disabled="disabled"
    @enter="enter"
    @leave="leave"
    @intersect="intersect"
  >
    <slot/>
  </intersection>
</template>

<script>
  import intersection from './intersection'

  export default {
    abstract: true,
    components: {
      intersection
    },
    props: {
      // root: {
      //   type: Element,
      //   default: null
      // },
      // rootMargin: {
      //   type: String,
      //   default: '0px'
      // },
      callback: {
        type: Function,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      enter(entry) {
        this.active = true
      },
      leave() {
        this.active = false
      },
      intersect() {
        this.update()
      },
      getScroll(el, descendantsScroll = { top: 0, left: 0 }) {
        const {
          scrollTop: elTop,
          scrollLeft: elLeft,
          parentElement: elParent
        } = el

        const {
          top: descendantsTop,
          left: descendantsLeft
        } = descendantsScroll

        const scroll = {
          top: elTop + descendantsTop,
          left: elLeft + descendantsLeft
        }

        if (!elParent || el === this.root) {
          return scroll
        }

        return this.getScroll(elParent, scroll);
      },
      getOffset(el, descendantsOffset = { top: 0, left: 0 }) {
        const {
          offsetTop: elTop,
          offsetLeft: elLeft,
          offsetParent: elParent
        } = el
        const {
          top: descendantsTop,
          left: descendantsLeft
        } = descendantsOffset

        const offset = {
          top: elTop + descendantsTop,
          left: elLeft + descendantsLeft
        }

        if (!elParent) {
          return offset
        }

        return this.getOffset(elParent, offset);
      },
      getDimensions(el) {
        if (!el) {
          const { innerWidth: width, innerHeight: height } = window

          return {
            width,
            height
          }
        }

        const { offsetWidth: width, offsetHeight: height } = el

        return {
          width,
          height
        }
      },
      getCurrentPosition() {
        const { $el: el, root, getOffset, getScroll } = this
        const { top: elScrollTop, left: elScrollLeft } = getScroll(el)
        const {
          top: rootOffsetTop = 0,
          left: rootOffsetLeft = 0
        } = root ? getOffset(root) : {}

        return {
          x: elScrollLeft + rootOffsetLeft,
          y: elScrollTop + rootOffsetTop
        }
      },
      getBoundingPositions() {
        const { $el: el, root, getDimensions, getOffset } = this
        const { top: elOffsetTop, left: elOffsetLeft } = getOffset(el)
        const { width: elWidth, height: elHeight } = getDimensions(el)
        const { width: rootWidth, height: rootHeight } = getDimensions(root)

        return {
          startX: elOffsetLeft - rootWidth,
          startY: elOffsetTop - rootHeight,
          endX: elOffsetLeft + elWidth,
          endY: elOffsetTop + elHeight
        }
      },
      getTranslation() {
        const { getBoundingPositions, getCurrentPosition } = this
        const { x: currentX, y: currentY } = getCurrentPosition()
        const { startX, startY, endX, endY } = getBoundingPositions()

        return {
          x: (currentX - startX) / (endX - startX),
          y: (currentY - startY) / (endY - startY)
        }
      },
      update() {
        if (this.disabled) {
          return
        }

        this.callback(this.getTranslation())

        if (this.active) {
          requestAnimationFrame(this.update)
        }
      }
    },
  }
</script>
