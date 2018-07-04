/**
 * vue-glide v0.1.0
 * (c) 2018 Marcus McLean
 * @license MIT
 */
var intersection = {
  abstract: true,
  props: {
    root: {
      type: Element,
      default: null
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    threshold: {
      type: [Number, Array],
      default: function () { return [0]; }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isIntersecting: undefined,
      intersectionObserver: undefined
    }
  },
  computed: {
    options: function options() {
      return {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold instanceof Array
          ? this.threshold.slice(0) : this.threshold
      }
    }
  },
  watch: {
    options: {
      immediate: true,
      handler: function handler() {
        if (this.disabled) {
          return
        }

        if (this.intersectionObserver) {
          this.disconnect();
        }

        this.create();

        if (!this.$el) {
          return
        }

        this.observe();
      }
    },
    disabled: function disabled(disabled$1) {
      if (this.disabled) {
        this.disconnect();

        return
      }

      this.create();
      this.observe();
    }
  },
  mounted: function mounted() {
    if (this.disabled) {
      return
    }

    this.observe();
  },
  methods: {
    create: function create() {
      this.intersectionObserver = new IntersectionObserver(
        this.callback,
        this.options
      );
    },
    observe: function observe() {
      this.intersectionObserver.observe(this.$el);
    },
    disconnect: function disconnect() {
      this.intersectionObserver.disconnect();
    },
    reset: function reset(newVal, oldVal) {
      this.disconnect();
      this.create();
      this.observe();
    },
    callback: function callback(ref) {
      var entry = ref[0];

      var isIntersecting = entry.isIntersecting;

      if (this.isIntersecting !== isIntersecting) {
        this.isIntersecting = isIntersecting;

        this.$emit(isIntersecting ? 'enter' : 'leave', entry);
      }

      this.$emit('intersect', entry);
    }
  },
  render: function render() {
    return this.$slots.default[0]
  }
};

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
//

var script$1 = {
  abstract: true,
  components: {
    intersection: intersection
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
    enter: function enter(entry) {
      this.active = true;
    },
    leave: function leave() {
      this.active = false;
    },
    intersect: function intersect() {
      this.update();
    },
    getScroll: function getScroll(el, descendantsScroll) {
      if ( descendantsScroll === void 0 ) descendantsScroll = { top: 0, left: 0 };

      var elTop = el.scrollTop;
      var elLeft = el.scrollLeft;
      var elParent = el.parentElement;

      var descendantsTop = descendantsScroll.top;
      var descendantsLeft = descendantsScroll.left;

      var scroll = {
        top: elTop + descendantsTop,
        left: elLeft + descendantsLeft
      };

      if (!elParent || el === this.root) {
        return scroll
      }

      return this.getScroll(elParent, scroll);
    },
    getOffset: function getOffset(el, descendantsOffset) {
      if ( descendantsOffset === void 0 ) descendantsOffset = { top: 0, left: 0 };

      var elTop = el.offsetTop;
      var elLeft = el.offsetLeft;
      var elParent = el.offsetParent;
      var descendantsTop = descendantsOffset.top;
      var descendantsLeft = descendantsOffset.left;

      var offset = {
        top: elTop + descendantsTop,
        left: elLeft + descendantsLeft
      };

      if (!elParent) {
        return offset
      }

      return this.getOffset(elParent, offset);
    },
    getDimensions: function getDimensions(el) {
      if (!el) {
        var width$1 = window.innerWidth;
        var height$1 = window.innerHeight;

        return {
          width: width$1,
          height: height$1
        }
      }

      var width = el.offsetWidth;
      var height = el.offsetHeight;

      return {
        width: width,
        height: height
      }
    },
    getCurrentPosition: function getCurrentPosition() {
      var ref = this;
      var el = ref.$el;
      var root = ref.root;
      var getOffset = ref.getOffset;
      var getScroll = ref.getScroll;
      var ref$1 = getScroll(el);
      var elScrollTop = ref$1.top;
      var elScrollLeft = ref$1.left;
      var ref$2 = root ? getOffset(root) : {};
      var rootOffsetTop = ref$2.top; if ( rootOffsetTop === void 0 ) rootOffsetTop = 0;
      var rootOffsetLeft = ref$2.left; if ( rootOffsetLeft === void 0 ) rootOffsetLeft = 0;

      return {
        x: elScrollLeft + rootOffsetLeft,
        y: elScrollTop + rootOffsetTop
      }
    },
    getBoundingPositions: function getBoundingPositions() {
      var ref = this;
      var el = ref.$el;
      var root = ref.root;
      var getDimensions = ref.getDimensions;
      var getOffset = ref.getOffset;
      var ref$1 = getOffset(el);
      var elOffsetTop = ref$1.top;
      var elOffsetLeft = ref$1.left;
      var ref$2 = getDimensions(el);
      var elWidth = ref$2.width;
      var elHeight = ref$2.height;
      var ref$3 = getDimensions(root);
      var rootWidth = ref$3.width;
      var rootHeight = ref$3.height;

      return {
        startX: elOffsetLeft - rootWidth,
        startY: elOffsetTop - rootHeight,
        endX: elOffsetLeft + elWidth,
        endY: elOffsetTop + elHeight
      }
    },
    getTranslation: function getTranslation() {
      var ref = this;
      var getBoundingPositions = ref.getBoundingPositions;
      var getCurrentPosition = ref.getCurrentPosition;
      var ref$1 = getCurrentPosition();
      var currentX = ref$1.x;
      var currentY = ref$1.y;
      var ref$2 = getBoundingPositions();
      var startX = ref$2.startX;
      var startY = ref$2.startY;
      var endX = ref$2.endX;
      var endY = ref$2.endY;

      return {
        x: (currentX - startX) / (endX - startX),
        y: (currentY - startY) / (endY - startY)
      }
    },
    update: function update() {
      if (this.disabled) {
        return
      }

      this.callback(this.getTranslation());

      if (this.active) {
        requestAnimationFrame(this.update);
      }
    }
  },
};

var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "intersection",
    {
      attrs: { disabled: _vm.disabled },
      on: { enter: _vm.enter, leave: _vm.leave, intersect: _vm.intersect }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

var __vue_template__$1 = typeof __vue_render__$1 !== 'undefined'
  ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }
  : {};
/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(
  template, style, script,
  scope, functional, moduleIdentifier,
  createInjector, createInjectorSSR
) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/Users/mrcsmcln/Packages/vue-glide/src/components/translation.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) { component.functional = true; }
  }

  component._scopeId = scope;

  return component
}
/* style inject */
function __vue_create_injector__$1() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  var isOldIE =
    typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (false && css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        code +=
          '\n/*# sourceMappingURL=data:application/json;base64,' +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) { el.setAttribute('media', css.media); }
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts
          .filter(Boolean)
          .join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
        else { style.element.appendChild(textNode); }
      }
    }
  }
}
/* style inject SSR */


var translation = __vue_normalize__$1(
  __vue_template__$1,
  __vue_inject_styles__$1,
  typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1,
  __vue_scope_id__$1,
  __vue_is_functional_template__$1,
  __vue_module_identifier__$1,
  typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {},
  typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
);

var dynamicComponent = {
  props: {
    tag: {
      type: String,
      default: undefined
    }
  },
  computed: {
    is: function is() {
      return (
        this.tag
        || this.$vnode.data.tag
        || this.$options.defaultTag
        || 'span'
      )
    }
  },
  render: function render(createElement) {
    return createElement(this.is, this.$slots.default)
  }
};

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
//
//
//
//
//

var script = {
  mixins: [dynamicComponent],
  defaultTag: 'div',
  components: {
    translation: translation
  },
  props: {
    root: {
      type: Element,
      default: null
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    translateX: {
      type: String,
      default: '0px'
    },
    translateY: {
      type: String,
      default: '0px'
    },
    // offsetX: {
    //   type: String,
    //   default: '0px'
    // },
    // offsetY: {
    //   type: String,
    //   default: '0px'
    // }
  },
  data: function data() {
    return {
      style: undefined
    }
  },
  methods: {
    update: function update(ref) {
      var x = ref.x;
      var y = ref.y;

      var ref$1 = this;
      var translateX = ref$1.translateX;
      var translateY = ref$1.translateY;
      this.style = {
        transform: [
          // `translateX(calc((${translateX} * ${(2 * x) - 1}) + ${offsetX}))`,
          // `translateY(calc((${translateY} * ${(2 * y) - 1}) + ${offsetY}))`
          ("translateX(calc(" + translateX + " * " + ((2 * x) - 1) + "))"),
          ("translateY(calc(" + translateY + " * " + ((2 * y) - 1) + "))")
        ].join(' ')
      };
    }
  }
  // render(createElement) {
  //     return createElement('translation', {
  //         props: {
  //             root: this.root,
  //             rootMargin: this.rootMargin,
  //         },
  //         on: {
  //             update: this.update,
  //         },
  //     }, this.$slots.default);
  // },
};

var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "translation",
    {
      attrs: {
        root: _vm.root,
        "root-margin": _vm.rootMargin,
        callback: _vm.update
      }
    },
    [
      _c(_vm.is, { tag: "component", style: _vm.style }, [_vm._t("default")], 2)
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

var __vue_template__ = typeof __vue_render__ !== 'undefined'
  ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
  : {};
/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(
  template, style, script$$1,
  scope, functional, moduleIdentifier,
  createInjector, createInjectorSSR
) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/Users/mrcsmcln/Packages/vue-glide/src/components/parallax.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) { component.functional = true; }
  }

  component._scopeId = scope;

  return component
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE =
    typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (false && css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        code +=
          '\n/*# sourceMappingURL=data:application/json;base64,' +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) { el.setAttribute('media', css.media); }
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts
          .filter(Boolean)
          .join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
        else { style.element.appendChild(textNode); }
      }
    }
  }
}
/* style inject SSR */


var parallax = __vue_normalize__(
  __vue_template__,
  __vue_inject_styles__,
  typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
  typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
);

var install = function (Vue) {
  Vue.component('GlideParallax', parallax);
  Vue.component('GlideTranslation', translation);
  Vue.component('GlideIntersection', intersection);
};

var index_esm = {
  install: install,
  parallax: parallax,
  translation: translation,
  intersection: intersection,
  version: '0.1.0'
};

export { install, parallax, translation, intersection };
export default index_esm;
