import { defineNuxtPlugin, useFetch } from '#app'

export default defineNuxtPlugin(() => ({
  provide: {
    mail: {
      send: async config => {
        try {
          return await useFetch('/mail/send', { body: config, method: 'POST' })
        } catch (error) {
          throw new Error(error.response.data)
        }
      },
    },
  },
}))
