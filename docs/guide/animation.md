# Animation

The Web Animations API lets us construct animations and control their playback with JavaScript.

## Keyframes

`<glide-animation>` accept objects formatted to represent a set of keyframes. There are several options to this format, which are explained below.

### Syntax

There are two different ways to format keyframes:

1. An array of objects (keyframes) consisting of properties and values to iterate over.

  ```html
  <glide-animation :keyframes="[
    { opacity: 0, color: '#fff' }, // from
    { opacity: 1, color: '#000' }  // to
  ]">
    <div></div>
  </glide-animation>
  ```

  Offsets for each keyframe can be specified by providing an offset value.

  ```html
  <glide-animation :keyframes="[
    { opacity: 1 },
    { opacity: 0.1, offset: 0.7 },
    { opacity: 0 }
  ]">
    <div></div>
  </glide-animation>
  ```

  ::: warning Note on Offset Values
  Offset values, if provided, must be between 0.0 and 1.0 (inclusive) and arranged in ascending order.
  :::

  It is not necessary to specify an offset for every keyframe. Keyframes without a specified offset will be evenly spaced between adjacent keyframes.

  The easing to apply between keyframes can be specified by providing an `easing` value as illustrated below.

  ```html
  <glide-animation :keyframes="[
    { opacity: 1, easing: 'ease-out' },
    { opacity: 0.1, easing: 'ease-in' },
    { opacity: 0 }
  ]">
    <div></div>
  </glide-animation>
  ```

  In this example, the specified easing only applies from the keyframe where it is specified until the next keyframe. Any `easing` value specified on the `options` prop, however, applies across a single iteration of the animation — for the entire duration.

2. An `Object` containing key-value pairs consisting of the property to animate and an `Array` of values to iterate over.

  ```html
  <glide-animation :keyframes="[
    opacity: [0, 1],        // [from, to]
    color: ['#fff', '#000'] // [from, to]
  ]">
    <div></div>
  </glide-animation>
  ```

  Using this format, the number of elements in each array does not need to be equal. The provided values will be spaced out independently.

  ```html
  <glide-animation :keyframes="[
    opacity: [0, 1],                            // offset: 0, 1
    backgroundColor: ['red', 'yellow', 'green'] // offset: 0, 0.5, 1
  ]">
    <div></div>
  </glide-animation>
  ```

  The special keys `offset`, `easing`, and `composite` (described below) may be specified alongside the property values.

  ```html
  <glide-animation :keyframes="[
    opacity: [0, 0.9, 1],
    offset: [0, 0.8],               // Shorthand for [0, 0.8, 1]
    easing: ['ease-in', 'ease-out']
  ]">
    <div></div>
  </glide-animation>
  ```

  After generating a suitable set of keyframes from the property value lists, each supplied offset is applied to the corresponding keyframe. If there are insufficient values, or if the list contains null values, the keyframes without specified offsets will be evenly spaced as with the array format described above.

  If there are too few `easing` or `composite` values, the corresponding list will be repeated as needed.

### Attributes

Keyframes may specify property-value pairs for any of the animatable CSS properties. The property names are specified using camel-case so for example `background-color` becomes `backgroundColor` and `background-position-x` becomes `backgroundPositionX`. Shorthand values such as `margin` are also permitted.

Two exceptional CSS properties are:

- `float`, which must be written as `cssFloat` since "float" is a reserved word in JavaScript
- `offset`, which must be written as `cssOffset` since "offset" represents the keyframe offset as described below.

The following special attributes may also be specified:

#### offset
The offset of the keyframe specified as a number between `0.0` and `1.0` inclusive or `null`. This is equivalent to specifying start and end states in percentages in CSS stylesheets using `@keyframes`. If this value is `null` or missing, the keyframe will be evenly spaced between adjacent keyframes.

#### easing
The timing function used from this keyframe until the next keyframe in the series.

composite
The `KeyframeEffect.composite` operation used to combine the values specified in this keyframe with the underlying value. This will be `auto` if the composite operation specified on the effect is being used.
