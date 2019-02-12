# Position

### Getting the Absolute Position of an Element

Getting an element's absolute position on the screen is easy. The simplest way to accomplish this is with `<glide-rect>`:

```html
<glide-rect :callback="update">
  <div class="foo">...</div>
</glide-rect>
```

```js
methods: {
  // This function gets called before every repaint
  update (rect) {
    // do something with `rect.top`, `rect.left`, etc.
  }
}
```

In this context, `rect` is simply the `DOMRect` returned by `Element.getBoundingClientRect()`.

### Getting the Relative Position of an Element

It's often more helpful to know the position of an element relative to the viewport. Vue Glide makes this simple with `<glide-position>`. It works just like `<glide-rect>`, except instead of the callback receiving a `DOMRect`, it receives a custom position object:

```html
<glide-position :callback="callback">
  <div class="foo">...</div>
</glide-position>
```

```js
methods: {
  callback ({
    top,
    right,
    bottom,
    left,
    innerWidth,
    innerHeight,
    outerWidth,
    outerHeight
  }) {
    // do something
  }
}
```

### Inner and Outer Dimensions

`<glide-position>` exposes four properties related to inner and outer dimensions: `innerWidth`, `innerHeight`, `outerWidth`, and `outerHeight`.

<p style="text-align: center; margin: 2em">
  <img style="width:100%;max-width:550px;" src="/innerwidth-outerwidth.png">
</p>

`innerWidth` is `0` when the left edge of the element is at the left edge of the viewport and `1` when the right of the element is at the right of the viewport. `innerHeight` works the same way, but it's from top to bottom instead of left to right.

`outerWidth` is `0` when the right edge of the element is at the left edge of the viewport and `1` when the left edge of the element is at the right edge of the viewport. `outerHeight` works the same way, but it's from top to bottom instead of left to right.

### Edge Coordinates

`<glide-position>` exposes four properties related to the coordinates of the edges: `top`, `right`, `bottom`, and `left`.

<p style="text-align: center; margin: 2em">
  <img style="width:100%;max-width:550px;" src="/left-right.png">
</p>

`left` is `0` when the right edge of the element is at the left edge of the viewport and `1` when the left edge of the element is at the left edge of the viewport.

`right` is `0` when the right edge of the element is at the right edge of the viewport and `1` when the left edge of the element is at the right edge of the viewport.

`top` and `bottom` work the same as `left` and `right`, respectively, but it's from top to bottom instead of left to right.
