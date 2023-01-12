import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(({ vueApp }) => {
  const vuetify = createVuetify()

  vueApp.use(vuetify)
})
