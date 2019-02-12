# Visibility

### Intersection

It's often useful to detect when an element intersects with the viewport. This can be accomplished with `<glide-intersection>`:

```html
<glide-intersection :callback="update">
  <div class="foo">...</div>
</glide-intersection>
```

```js
methods: {
  // This function gets called whenever the element enters or leaves the viewport
  update (entry) {
    // do something with `entry.isIntersecting`, `entry.intersectionRatio`, etc.
  }
}
```

Since `<glide-intersection>` is a simple wrapper for `IntersectionObserver`, you can pass an optional `options` prop:

```html
<glide-intersection
  :options="{ threshold: 0.5 }"
  :callback="update"
>
  <div class="foo">...</div>
</glide-intersection>
```

The above example will only fire when half of the element is intersecting with the viewport. Check out the `IntersectionObserver` constructor [documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) for more options.

### Visibility

For a higher-level approach to element visibility, you can use `<glide-visibility>`, which behaves much like Vue's built-in [`<transition>` component](https://vuejs.org/v2/guide/transitions.html). Here's an example:

```html
<glide-visibility name="fade">
  <div class="foo">...</div>
</glide-visibility>
```

```css
.foo {
  transition-duration: 500ms;
}

.fade-hidden {
  opacity: 0;
}
```

#### Visibility Classes

There are two classes applied for enter/leave transitions:

1. `v-visible`: Present while the element is inside the viewport.
2. `v-hidden`: Present while the element is outside the viewport.

Each of these classes will be prefixed with the name of the transition. Here the `v-` prefix is the default when you use a `<glide-visibility>` element with no name. If you use `<glide-visibility name="my-transition">` for example, then the `v-visible` class would instead be `my-transition-visible`.

