import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Icon: typeof FontAwesomeIcon
  }
}

config.autoAddCss = false

export default defineNuxtPlugin(({ vueApp }) =>
  vueApp.component('Icon', FontAwesomeIcon)
)
