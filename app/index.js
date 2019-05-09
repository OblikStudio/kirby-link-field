import App from './App.vue'
import Preview from './Preview.vue'

panel.plugin('medienbaecker/link', {
  fields: {
    link: App
  },
  components: {
    'k-link-field-preview': Preview
  }
})
