<template>
  <div id="app">
    <h1>Vue Glide Intersection Example</h1>
    <form class="form">
      <h2>Options</h2>
      <fieldset>
        <legend>Root</legend>
        <ul>
          <li
            v-for="root in ['window', 'HTMLDivElement']"
            :key="root"
          >
            <label>
              <input
                type="radio"
                v-model="inputOptions.root"
                :value="root"
              >
              <code>{{ root }}</code>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Thresholds</legend>
        <ul>
          <li
            v-for="(threshold, index) in inputOptions.threshold"
            :key="index"
          >
            <input
              v-model.number="inputOptions.threshold[index]"
              type="number"
              min="0"
              max="1"
              step="0.1"
            >
            <button
              type="button"
              @click="inputOptions.threshold.push(threshold)"
            >+</button>
            <button
              v-if="index"
              type="button"
              @click="inputOptions.threshold.splice(index, 1)"
            >−</button>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Margin</legend>
        <ul>
          <li
            v-for="(data, side) in inputOptions.rootMargin"
            :key="side"
          >
            {{ side.charAt(0).toUpperCase() + side.slice(1) }}:
            <input
              v-model.number="data.value"
              type="number"
              min="0"
            >
            <select v-model="data.type">
              <option
                v-for="type in ['cm', 'mm', 'Q', 'in', 'pt', 'pc', 'px', '%']"
                :key="type"
                v-text="type"
              />
            </select>
          </li>
        </ul>
      </fieldset>
      <h2>Result (scroll down and check your console)</h2>
      <div
        class="div"
        :class="{ 'div-active': outputOptions.root }"
        ref="div"
      >
        <output class="output">
          <GlideIntersection
            v-bind="outputOptions"
            @enter="logEvent('enter', $event)"
            @intersect="logEvent('intersect', $event)"
            @leave="logEvent('leave', $event)"
          >
            <code
              class="intersection"
              v-text="output"
            />
          </GlideIntersection>
        </output>
      </div>
    </form>
  </div>
</template>

<script>
import { GlideIntersection } from 'vue-glide'

export default {
  name: 'ExampleIntersection',
  components: {
    GlideIntersection
  },
  data() {
    return {
      isIntersecting: undefined,
      inputOptions: {
        root: 'window',
        rootMargin: {
          top: {
            type: 'px',
            value: 0,
          },
          right: {
            type: 'px',
            value: 0,
          },
          bottom: {
            type: 'px',
            value: 0,
          },
          left: {
            type: 'px',
            value: 0,
          }
        },
        threshold: [0]
      }
    }
  },
  computed: {
    output() {
      const { root, rootMargin, threshold } = this.outputOptions
      const attrs = {}

      if (root) {
        attrs[':root'] = '$refs.div'
      }

      if (rootMargin !== '0px') {
        attrs['root-margin'] = rootMargin
      }

      if (threshold.toString() !== '0') {
        attrs[':threshold'] = `[${threshold.join(', ')}]`
      }

      let html = '<GlideIntersection'

      Object.entries(attrs).forEach(([name, value]) => {
        html = ` ${html} ${name}="${value}"`
      })

      return `${html}/>`
    },
    outputOptions() {
      const { root, rootMargin, threshold } = this.inputOptions

      console.log(rootMargin);

      return {
        root: { window: null, HTMLDivElement: this.$refs.div }[root],
        rootMargin: this.cleanRootMargin(rootMargin),
        threshold,
      }
    }
  },
  methods: {
    cleanRootMargin({ top, right, bottom, left }) {
      const marginTop = `${top.value}${top.type}`
      const marginRight = `${right.value}${right.type}`
      const marginBottom = `${bottom.value}${bottom.type}`
      const marginLeft = `${left.value}${left.type}`

      if (marginRight !== marginLeft) {
        return `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`
      }

      if (marginTop !== marginBottom) {
        return `${marginTop} ${marginRight} ${marginBottom}`
      }

      if (marginTop !== marginRight) {
        return `${marginTop} ${marginRight}`
      }

      return marginTop
    },
    logEvent(type, event) {
      console.log(`[vue-glide]: ${type} event fired`, event);
    }
  }
}
</script>

<style>
.form {
  /*display: flex;*/
}

.div-active {
  background-color: #eee;
  height: 50vh;
  margin-bottom: 50vh;
  overflow-y: scroll;
}

.intersection {
  display: block;
  padding: 100px;
  background-color: #ccc;
}

.output {
  display: block;
  padding-top: 100vh;
  padding-bottom: 100vh;
}
</style>
