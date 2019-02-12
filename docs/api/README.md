---
sidebar: auto
---

# API Reference

## `<glide-intersection>`

## `<glide-intersection>` Props

### callback

- type: `Function`
- default: `null`

### options

- type `Object`
- default: `{}`

## `<glide-visibility>`

## `<glide-visibility>` Props

### name

- type: `String`
- default: `"v"`

### appear

- type: `Boolean`
- default: `false`

### persist

- type: `Boolean`
- default: `false`

### css

- type: `Boolean`
- default: `true`

### visible-class

- type: `String`
- default: `null`

### hidden-class

- type: `String`
- default: `null`

### options

- type: `Object`
- default: `null`

### `<glide-visibility>` Events

- `enter`
- `enter-top`
- `enter-right`
- `enter-bottom`
- `enter-left`
- `leave`
- `leave-top`
- `leave-right`
- `leave-bottom`
- `leave-left`

## `<glide-rect>`

## `<glide-rect>` Props

### callback

- type: `Function`
- default: `null`
  
  The following example will log whenever the dimensions of the wrapped `div` change.

  ```html
  <glide-rect :callback="updateDimensions">
    <div class="foo">...</div>
  </glide-rect>
  ```

  ```js
  data: {
    width: null,
    height: null
  },
  watch: {
    width: 'handleDimensionChange',
    height: 'handleDimensionChange'
  },
  methods: {
    updateDimensions (rect) {
      this.width = rect.width
      this.height = rect.height
    },
    handleDimensionChange (value, oldValue) {
      if (oldValue !== null) {
        return
      }

      this.handleResize()
    },
    handleResize () {
      console.log('Resized!')
    }
  }
  ```

## `<glide-position>`

## `<glide-position>` Props

### callback

- type: `Function`
- default: `null`

  ```html
  <glide-position :callback="update">
    <div class="foo">...</div>
  </glide-position>
  ```

  ```js
  data: {

  },
  methods: {
    update (position) {

    }
  }
  ```

## `<glide-animation>`

The following example will link a slider with an animation:

```html
<glide-animation>
  <div class="foo">...</div>
</glide-animation>
```

```js
data: {
  
},
methods: {

}
```

## `<glide-animation>` Props

### keyframes

- type: `Object`
- default: `null`

  Either an array of keyframe objects, or a keyframe object whose property are arrays of values to iterate over.

  [Details](../guide/animation.md#keyframes)

### options

- type: `Number | Object`
- default: `null`

Either an integer representing the animation's duration (in milliseconds), or an Object containing one or more timing properties:

- **id** <Badge text="Optional"/>

  A property unique to `animate()`: a DOMString with which to reference the animation.

- **delay** <Badge text="Optional"/>

  The number of milliseconds to delay the start of the animation. Defaults to `0`.

- **direction** <Badge text="Optional"/>

  Whether the animation runs forwards (`normal`), backwards (`reverse`), switches direction after each iteration (`alternate`), or runs backwards and switches direction after each iteration (`alternate-reverse`). Defaults to `"normal"`.

- **duration* <Badge text="Optional"/>

  The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.

- **easing** <Badge text="Optional"/>

  The rate of the animation's change over time. Accepts the pre-defined values `"linear"`, `"ease"`, `"ease-in"`, `"ease-out"`, and `"ease-in-out"`, or a custom `"cubic-bezier"` value like `"cubic-bezier(0.42, 0, 0.58, 1)"`. Defaults to `"linear"`.

- **endDelay** <Badge text="Optional"/>

  The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to `0`.

- **fill** <Badge text="Optional"/>

  Dictates whether the animation's effects should be reflected by the element(s) prior to playing (`"backwards"`), retained after the animation has completed playing (`"forwards"`), or both. Defaults to `"none"`.

- **iterationStart** <Badge text="Optional"/>

  Describes at what point in the iteration the animation should start. `0.5` would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to `0.0`.

- **iterations** <Badge text="Optional"/>

  The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.

### start-time

- type: `Number`
- default: `null`

### current-time

- type: `Number`
- default: `null`

### playback-rate

- type: `Number`
- default: `1`

  Takes a number that can be 0, negative, or positive. Negative values reverse the animation. The value is a scaling factor, so for example a value of 2 would double the playback rate.

  ::: tip
  Setting an animation’s playbackRate to 0 effectively pauses the animation
  :::

## `<glide-pivot>`

## `<glide-pivot>` Props

### callback

- type: `Function`
- default: `null`