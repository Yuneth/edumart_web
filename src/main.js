import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Bootstrap (utilities only)
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary:   '#c9a84c',
          secondary: '#0a1628',
          accent:    '#e2c27a',
          error:     '#FF5252',
          info:      '#2196F3',
          success:   '#4CAF50',
          warning:   '#FFC107',
        }
      }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')