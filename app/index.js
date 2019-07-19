/* global panel */

import App from './App.vue'
import Preview from './Preview.vue'

panel.plugin('oblik/link-field', {
  fields: {
    link: App
  },
  components: {
    'k-link-field-preview': Preview
  }
})
