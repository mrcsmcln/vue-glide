(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGlide"] = factory();
	else
		root["VueGlide"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/mixins/render.js
/* harmony default export */ var render = ({
  render: function render() {
    var children = this.$slots.default;

    if (!children) {
      return;
    }

    children = children.filter(function (_ref) {
      var tag = _ref.tag;
      return tag;
    });

    if (!children.length) {
      return;
    } // if (process.env.NODE_ENV !== 'production' && children.length > 1) {
    //   // eslint-disable-next-line no-console
    //   console.error(`[vue-glide] <${this.$options.name}> can only be used on a single element.`)
    // }


    return children[0];
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlideRect.vue?vue&type=script&lang=js&

/* harmony default export */ var GlideRectvue_type_script_lang_js_ = ({
  name: 'GlideRect',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      default: null
    }
  },
  watch: {
    callback: 'update'
  },
  mounted: function mounted() {
    this.update();
  },
  methods: {
    update: function update() {
      if (!this.callback) {
        return;
      }

      this.callback(this.$el.getBoundingClientRect());
      window.requestAnimationFrame(this.update);
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlideRect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlideRectvue_type_script_lang_js_ = (GlideRectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/GlideRect.vue
var GlideRect_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_GlideRectvue_type_script_lang_js_,
  GlideRect_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "GlideRect.vue"
/* harmony default export */ var GlideRect = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ed55e01-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlidePointer.vue?vue&type=template&id=486b6860&
var GlidePointervue_type_template_id_486b6860_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('GlideRect',{attrs:{"callback":_vm.callback ? _vm.setRect : null}},[_vm._t("default")],2)}
var GlidePointervue_type_template_id_486b6860_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GlidePointer.vue?vue&type=template&id=486b6860&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlidePointer.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var GlidePointervue_type_script_lang_js_ = ({
  name: 'GlidePointer',
  components: {
    GlideRect: GlideRect
  },
  props: {
    callback: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      rect: {},
      mouse: {}
    };
  },
  computed: {
    clientX: function clientX() {
      return this.mouse.clientX / window.innerWidth;
    },
    clientY: function clientY() {
      return this.mouse.clientY / window.innerHeight;
    },
    offsetX: function offsetX() {
      var rect = this.rect;
      return (this.mouse.clientX - rect.left) / rect.width;
    },
    offsetY: function offsetY() {
      var rect = this.rect;
      return (this.mouse.clientY - rect.top) / rect.height;
    },
    angle: function angle() {
      var divisor = Math.PI * 2;
      return (Math.atan2(this.distanceY, this.distanceX) + divisor * 1.25) % divisor;
    },
    phase: function phase() {
      return this.angle / (2 * Math.PI);
    },
    distanceX: function distanceX() {
      var rect = this.rect;
      return this.mouse.clientX - (rect.left + rect.width / 2);
    },
    distanceY: function distanceY() {
      var rect = this.rect;
      return this.mouse.clientY - (rect.top + rect.height / 2);
    },
    distance: function distance() {
      return Math.hypot(this.distanceX, this.distanceY);
    },
    maxDistance: function maxDistance() {
      var abs = Math.abs;
      var rect = this.rect;
      var x = rect.width / 2;
      var y = rect.height / 2;
      var angle = this.angle - Math.PI / 2;
      return abs(Math.tan(angle)) <= y / x ? x / abs(Math.cos(angle)) : y / abs(Math.sin(angle));
    },
    majorDistance: function majorDistance() {
      var rect = this.rect;
      return this.distance / (Math.max(rect.width, rect.height) / 2);
    },
    minorDistance: function minorDistance() {
      var rect = this.rect;
      return this.distance / (Math.min(rect.width, rect.height) / 2);
    },
    adjustedDistance: function adjustedDistance() {
      return this.distance / this.maxDistance;
    },
    pointer: function pointer() {
      return {
        phase: this.phase,
        clientX: this.clientX,
        clientY: this.clientY,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        majorDistance: this.majorDistance,
        minorDistance: this.minorDistance,
        adjustedDistance: this.adjustedDistance
      };
    }
  },
  watch: {
    callback: 'init',
    pointer: function pointer(_pointer) {
      this.callback(_pointer);
    }
  },
  mounted: function mounted() {
    if (this.callback) {
      window.addEventListener('mousemove', this.setMouse);
    }
  },
  methods: {
    init: function init() {
      var setMouse = this.setMouse;

      if (this.callback) {
        window.addEventListener('mousemove', setMouse);
        return;
      }

      window.removeEventListener('mousemove', setMouse);
    },
    setRect: function setRect(rect) {
      this.rect = rect;
    },
    setMouse: function setMouse(mouse) {
      this.mouse = mouse;
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlidePointer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlidePointervue_type_script_lang_js_ = (GlidePointervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/GlidePointer.vue





/* normalize component */

var GlidePointer_component = normalizeComponent(
  components_GlidePointervue_type_script_lang_js_,
  GlidePointervue_type_template_id_486b6860_render,
  GlidePointervue_type_template_id_486b6860_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GlidePointer_component.options.__file = "GlidePointer.vue"
/* harmony default export */ var GlidePointer = (GlidePointer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ed55e01-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlidePosition.vue?vue&type=template&id=cf99ed76&
var GlidePositionvue_type_template_id_cf99ed76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('GlideRect',{attrs:{"callback":_vm.update}},[_vm._t("default")],2)}
var GlidePositionvue_type_template_id_cf99ed76_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GlidePosition.vue?vue&type=template&id=cf99ed76&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlidePosition.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var GlidePositionvue_type_script_lang_js_ = ({
  name: 'GlidePosition',
  components: {
    GlideRect: GlideRect
  },
  props: {
    callback: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      rect: undefined
    };
  },
  computed: {
    top: function top() {
      var rect = this.rect;
      return rect.bottom / rect.height;
    },
    right: function right() {
      var rect = this.rect;
      return (rect.right - window.innerWidth) / rect.width;
    },
    bottom: function bottom() {
      var rect = this.rect;
      return (rect.bottom - window.innerHeight) / rect.height;
    },
    left: function left() {
      var rect = this.rect;
      return rect.right / rect.width;
    },
    innerWidth: function innerWidth() {
      var rect = this.rect;
      return rect.left / (window.innerWidth - rect.width);
    },
    innerHeight: function innerHeight() {
      var rect = this.rect;
      return rect.top / (window.innerHeight - rect.height);
    },
    outerWidth: function outerWidth() {
      var rect = this.rect;
      return rect.right / (window.innerWidth + rect.width);
    },
    outerHeight: function outerHeight() {
      var rect = this.rect;
      return rect.bottom / (window.innerHeight + rect.height);
    },
    position: function position() {
      return {
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        left: this.left,
        innerWidth: this.innerWidth,
        innerHeight: this.innerHeight,
        outerWidth: this.outerWidth,
        outerHeight: this.outerHeight
      };
    }
  },
  methods: {
    update: function update(rect) {
      this.rect = rect;
      this.callback(this.position, this.rect);
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlidePosition.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlidePositionvue_type_script_lang_js_ = (GlidePositionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/GlidePosition.vue





/* normalize component */

var GlidePosition_component = normalizeComponent(
  components_GlidePositionvue_type_script_lang_js_,
  GlidePositionvue_type_template_id_cf99ed76_render,
  GlidePositionvue_type_template_id_cf99ed76_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GlidePosition_component.options.__file = "GlidePosition.vue"
/* harmony default export */ var GlidePosition = (GlidePosition_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlideAnimation.vue?vue&type=script&lang=js&

/* harmony default export */ var GlideAnimationvue_type_script_lang_js_ = ({
  name: 'GlideAnimation',
  mixins: [render],
  props: {
    keyframes: {
      type: Object,
      default: null
    },
    options: {
      type: [Number, Object],
      default: null
    },
    startTime: {
      type: Number,
      default: null
    },
    currentTime: {
      type: Number,
      default: null
    },
    playbackRate: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      animation: undefined
    };
  },
  watch: {
    keyframes: {
      handler: function handler() {
        this.cancel();
        this.init();
      },
      deep: true
    },
    options: {
      handler: function handler() {
        this.cancel();
        this.init();
      },
      deep: true
    },
    startTime: function startTime(_startTime) {
      this.animation.startTime = _startTime;
    },
    currentTime: function currentTime(_currentTime) {
      this.animation.currentTime = _currentTime;
    },
    playbackRate: function playbackRate(_playbackRate) {
      this.animation.playbackRate = _playbackRate;
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    cancel: function cancel() {
      this.animation.cancel();
    },
    finish: function finish() {
      this.animation.finish();
    },
    play: function play() {
      this.animation.play();
    },
    pause: function pause() {
      this.animation.pause();
    },
    reverse: function reverse() {
      this.animation.reverse();
    },
    init: function init() {
      var _this = this;

      this.animation = this.$el.animate(this.keyframes, this.options);
      var animation = this.animation,
          startTime = this.startTime,
          currentTime = this.currentTime,
          playbackRate = this.playbackRate;
      animation.playbackRate = playbackRate;

      if (startTime !== null) {
        animation.startTime = startTime;
      }

      if (currentTime !== null) {
        animation.currentTime = currentTime;
      }

      animation.addEventListener('finish', function () {
        return _this.$emit('finish');
      });
      animation.addEventListener('cancel', function () {
        return _this.$emit('cancel');
      });
      this.animation = animation;
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlideAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlideAnimationvue_type_script_lang_js_ = (GlideAnimationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/GlideAnimation.vue
var GlideAnimation_render, GlideAnimation_staticRenderFns




/* normalize component */

var GlideAnimation_component = normalizeComponent(
  components_GlideAnimationvue_type_script_lang_js_,
  GlideAnimation_render,
  GlideAnimation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GlideAnimation_component.options.__file = "GlideAnimation.vue"
/* harmony default export */ var GlideAnimation = (GlideAnimation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ed55e01-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlideVisibility.vue?vue&type=template&id=45fddfc2&
var GlideVisibilityvue_type_template_id_45fddfc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('GlideIntersection',{class:_vm.className,attrs:{"callback":_vm.callback,"options":_vm.options}},[_vm._t("default")],2)}
var GlideVisibilityvue_type_template_id_45fddfc2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GlideVisibility.vue?vue&type=template&id=45fddfc2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlideIntersection.vue?vue&type=script&lang=js&

/* harmony default export */ var GlideIntersectionvue_type_script_lang_js_ = ({
  name: 'GlideIntersection',
  mixins: [render],
  props: {
    callback: {
      type: Function,
      default: null
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      intersectionObserver: null
    };
  },
  watch: {
    options: 'reset',
    callback: 'reset'
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.reset();

      if (!this.callback) {
        return;
      }

      this.create();
      this.observe();
    },
    reset: function reset() {
      if (!this.intersectionObserver) {
        return;
      }

      this.disconnect();
      this.intersectionObserver = null;
    },
    create: function create() {
      var _this = this;

      this.intersectionObserver = new IntersectionObserver( // no destructuring because Babel freaks out
      function (entries) {
        return _this.callback(entries[0]);
      }, this.options);
    },
    observe: function observe() {
      this.intersectionObserver.observe(this.$el);
    },
    disconnect: function disconnect() {
      this.intersectionObserver.disconnect();
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlideIntersection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlideIntersectionvue_type_script_lang_js_ = (GlideIntersectionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/GlideIntersection.vue
var GlideIntersection_render, GlideIntersection_staticRenderFns




/* normalize component */

var GlideIntersection_component = normalizeComponent(
  components_GlideIntersectionvue_type_script_lang_js_,
  GlideIntersection_render,
  GlideIntersection_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GlideIntersection_component.options.__file = "GlideIntersection.vue"
/* harmony default export */ var GlideIntersection = (GlideIntersection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlideVisibility.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var GlideVisibilityvue_type_script_lang_js_ = ({
  name: 'GlideVisibility',
  components: {
    GlideIntersection: GlideIntersection
  },
  props: {
    name: {
      type: String,
      default: 'v'
    },
    appear: {
      type: Boolean,
      default: false
    },
    persist: {
      type: Boolean,
      default: false
    },
    css: {
      type: Boolean,
      default: true
    },
    // type: {
    //   type: String,
    //   default: null,
    //   validator: type => ['transition', 'animation'].includes(type)
    // },
    visibleClass: {
      type: String,
      default: null
    },
    hiddenClass: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      previousIsIntersecting: undefined
    };
  },
  computed: {
    className: function className() {
      if (!this.css) {
        return null;
      }

      if (this.previousIsIntersecting === undefined) {
        return;
      }

      if (this.previousIsIntersecting) {
        return this.visibleClass || "".concat(this.name, "-visible");
      }

      return this.hiddenClass || "".concat(this.name, "-hidden");
    }
  },
  methods: {
    callback: function callback(entry) {
      var isIntersecting = entry.isIntersecting;

      if (this.previousIsIntersecting === undefined && !this.appear) {
        this.previousIsIntersecting = isIntersecting;
        return;
      }

      if (isIntersecting === this.previousIsIntersecting) {
        return;
      }

      if (this.persist && !isIntersecting) {
        return;
      }

      this.previousIsIntersecting = isIntersecting;
      this[isIntersecting ? 'enter' : 'leave'](entry);
    },
    enter: function enter(_ref) {
      var rootBounds = _ref.rootBounds,
          intersectionRect = _ref.intersectionRect;
      this.$emit('enter');

      if (rootBounds.top === intersectionRect.top) {
        this.$emit('enter-top');
      }

      if (rootBounds.right === intersectionRect.right) {
        this.$emit('enter-right');
      }

      if (rootBounds.bottom === intersectionRect.bottom) {
        this.$emit('enter-bottom');
      }

      if (rootBounds.left === intersectionRect.left) {
        this.$emit('enter-left');
      }
    },
    leave: function leave(_ref2) {
      var rootBounds = _ref2.rootBounds,
          boundingClientRect = _ref2.boundingClientRect;
      this.$emit('leave');

      if (rootBounds.top > boundingClientRect.top) {
        this.$emit('leave-top');
      }

      if (rootBounds.right < boundingClientRect.right) {
        this.$emit('leave-right');
      }

      if (rootBounds.bottom < boundingClientRect.bottom) {
        this.$emit('leave-bottom');
      }

      if (rootBounds.left > boundingClientRect.left) {
        this.$emit('leave-left');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlideVisibility.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlideVisibilityvue_type_script_lang_js_ = (GlideVisibilityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/GlideVisibility.vue





/* normalize component */

var GlideVisibility_component = normalizeComponent(
  components_GlideVisibilityvue_type_script_lang_js_,
  GlideVisibilityvue_type_template_id_45fddfc2_render,
  GlideVisibilityvue_type_template_id_45fddfc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GlideVisibility_component.options.__file = "GlideVisibility.vue"
/* harmony default export */ var GlideVisibility = (GlideVisibility_component.exports);
// CONCATENATED MODULE: ./src/main.js







function install(Vue) {
  // if (Vue && _Vue === Vue) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.error('[vue-glide] already installed. Vue.use(VueGlide) should be called only once.')
  //   }
  //   return
  // }
  // Vue = _Vue
  Vue.component('GlideRect', GlideRect);
  Vue.component('GlidePointer', GlidePointer);
  Vue.component('GlidePosition', GlidePosition);
  Vue.component('GlideAnimation', GlideAnimation);
  Vue.component('GlideVisibility', GlideVisibility);
  Vue.component('GlideIntersection', GlideIntersection);
}

/* harmony default export */ var main = ({
  install: install,
  GlideRect: GlideRect,
  GlidePointer: GlidePointer,
  GlidePosition: GlidePosition,
  GlideAnimation: GlideAnimation,
  GlideVisibility: GlideVisibility,
  GlideIntersection: GlideIntersection
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueGlide.umd.js.map