const fs = require("fs");
const path = require("path");
const { config } = require("vuepress-theme-hope");

module.exports = config({
  base: "/vue-3-guide/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CodeWorks Download',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Learn Vue 3 with Auth0",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://bcw.blob.core.windows.net/public/downloads/7963870079450366',
    darkLogo: 'https://bcw.blob.core.windows.net/public/downloads/3472546449277889',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    repo: 'codeworksacademy/vue-3-guide',
    repoLabel: 'Contribute!',
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#00ffdc",
      orange: "#fb9b5f",
      purple: "#8e44ad",
      banana: "#ffe135"
    },
    nav: [
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'CodeWorks',
        link: 'https://boisecodeworks.com'
      }
    ],
    sidebar: {
      '/resources/': [
        ...getSideBar('resources', 'Getting Started'), 
        ...getSideBar('resources/01-changes', 'Vue 3 Breaking Changes'), 
        ...getSideBar('resources/02-new', 'Vue 3 Whats New?'), 
        ...getSideBar('resources/03-auth0', 'Auth0 Identity'),
        ...getSideBar('resources/04-demo', 'Demo')
      ]
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/nprogress',
    ["@mr-hope/sitemap",{ hostname: 'https://codeworksacademy.github.io/vue-3-guide' }],
  ]
})

function getSideBar(folder, title) {
  const extension = [".md"];
  const root = folder.lastIndexOf('/') === -1 ? '' : folder.slice(folder.lastIndexOf('/') + 1)
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(file =>
      file.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
      extension.includes(path.extname(file))
    ).map(filename => {
      if (!root) {
        return filename
      }
      return root + '/' + filename
    });
  const children = [...files]
  if (!root) {
    children.unshift('')
  }
  return [{ title: title, children }];
}
