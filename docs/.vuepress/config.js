module.exports = {
  title: 'Vue Glide',
  description: 'motion component library for Vue.js',
  themeConfig: {
    repo: 'mrcsmcln/vue-glide',
    docsDir: 'docs',
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      }, {
        text: 'API Reference',
        link: '/api/'
      }
    ],
    sidebar: [
      '/installation',
      '/',
      '/guide/',
      {
        title: 'Core Concepts',
        collapsable: false,
        children: [
          '/guide/position',
          '/guide/intersection',
          '/guide/animation'
        ]
      }
    ]
  }
}

