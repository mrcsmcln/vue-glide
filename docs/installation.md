# Installation

### Direct Download / CDN

[https://unpkg.com/vue-glide](https://unpkg.com/vue-glide)

[Unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like `https://unpkg.com/vue-glide@0.2.0`.

Include Vue Glide after Vue and it will install itself automatically:

``` html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-glide.js"></script>
```

### NPM

``` bash
npm install vue-glide --save
```

### Yarn

``` bash
yarn add vue-glide
```

When used with a module system, you must explicitly install Vue Glide via `Vue.use()`:

``` js
import Vue from 'vue'
import VueGlide from 'vue-glide'

Vue.use(VueGlide)
```

You don't need to do this when using global script tags.

### Web Animations

Vue Glide requires [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) and [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). If your supporting browsers do not implement Web Animations and Intersection Observer (e.g. IE), you can use polyfill libraries, such as [web-animations-js](https://github.com/web-animations/web-animations-js) and [intersection-observer](https://github.com/w3c/IntersectionObserver).

You can include them via CDN:

``` html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
```

Then `window.Promise` will be available automatically.

If you prefer using a package manager such as NPM or Yarn, install it with the following commands:

``` bash
npm install es6-promise --save # NPM
yarn add es6-promise # Yarn
```

Furthermore, add the below line into anywhere in your code before using Vuex:

``` js
import 'es6-promise/auto'
```
