import './style.css'

/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faSquareInstagram, faFacebookF,faTwitter,faPiedPiperAlt } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faSquareInstagram,
faFacebookF,faTwitter,faMagnifyingGlass,faPiedPiperAlt)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
