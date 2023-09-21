// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

 
  app: {
    head :{
      htmlAttrs :{
        dir : "rtl"
      }
    }
  },
  css : ['vuetify/dist/vuetify.css' , 'bootstrap-icons/font/bootstrap-icons.css'],
  
  
  build : {
    transpile : ["vuetify"],
    
    
    
  },
 
  
})
