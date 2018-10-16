---
sidebar: auto
---

# API Reference

## `<glide-intersection>`

## `<glide-intersection>` Props

### root

- type: `Element | null`
- default: `null`

  A specific ancestor of the target element being observed. If no value was passed to the constructor or this is null, the top-level document's viewport is used.

### root-margin

- type: `String`
- default: `"0px"`

  An offset rectangle applied to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Each offset can be expressed in pixels (`px`) or as a percentage (`%`).

  ```html
  <!-- shrinks the root -->
  <glide-intersection root-margin="-10%">
    <div></div>
  </glide-intersection>

  <!-- grows the root vertically -->
  <glide-intersection root-margin="25% 0%">
    <div></div>
  </glide-intersection>

  <!-- grows the root horizontally and shrinks it on the bottom -->
  <glide-intersection root-margin="0% 20% -10px">
    <div></div>
  </glide-intersection>

  <!-- shrinks the root only on the left -->
  <glide-intersection root-margin="0px 0px 0px -15%">
    <div></div>
  </glide-intersection>
  ```

### threshold

- type: `Number | Array<Number>`
- default: `0`

  A list of thresholds, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of an observed target.

  ```html
  <!-- number literal -->
  <glide-intersection :threshold="0.5">
    <div></div>
  </glide-intersection>

  <!-- array of numbers -->
  <glide-intersection :threshold="[0, 0.5, 1]">
    <div></div>
  </glide-intersection>
  ```

## `<glide-reveal>`

## `<glide-reveal>` Props

### name

- type: `String`
- default: `"v"`

## `<glide-rect>`

## `<glide-rect>` Props

### callback

- type: `Function`
- required

## `<glide-position>`

## `<glide-position>` Props

### callback

- type: `Function`
- required

## `<glide-animation>`

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

  A property unique to animate(): a DOMString with which to reference the animation.

- **delay** <Badge text="Optional"/>

  The number of milliseconds to delay the start of the animation. Defaults to 0.

- **direction** <Badge text="Optional"/>

  Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".

- **duration* <Badge text="Optional"/>

  The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.

- **easing** <Badge text="Optional"/>

  The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear".

- **endDelay** <Badge text="Optional"/>

  The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.

- **fill** <Badge text="Optional"/>

  Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".

- **iterationStart** <Badge text="Optional"/>

  Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.

- **iterations** <Badge text="Optional"/>

  The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.

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

## `<glide-parallax>`

## `<glide-parallax>` Props

### translate

- type: `String`
- required
