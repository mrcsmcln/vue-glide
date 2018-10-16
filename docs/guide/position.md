# Position

To determine the position of an element on an ongoing basis, Vue Glide uses `Element.getBoundingClientRect()` with `window.requestAnimationFrame()` to ensure high performance.

```html
<div id="app">
  <glide-rect :callback="callback">
    <div></div>
  </glide-rect>
</div>
```
```js
new Vue({
  methods: {
    callback (rect) {
      // do something
    }
  }
}).$mount('#app')
</script>
```

On its own, `<glide-rect>` isn't all that helpful. That being said, Vue Glide builds upon `<glide-rect>` in the form of `<glide-position>`.

```html
<div id="app">
  <glide-position :callback="callback">
    <div></div>
  </glide-position>
</div>
```

```js
new Vue({
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
}).$mount('#app')
</script>
```

Each of the properties of the object passed to `callback()` above are numbers from `0` to `1`.

