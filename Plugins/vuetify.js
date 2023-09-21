import { createVuetify } from "vuetify/lib/framework.mjs"
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
export default  defineNuxtPlugin(nuxtapp =>{
          const vuetify = createVuetify({
            ssr : true,
            components,
            directives
          })
          nuxtapp.vueApp.use(vuetify)
})