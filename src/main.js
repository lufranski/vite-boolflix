import { createApp } from 'vue'
import './style.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

library.add(fasStar, farStar)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
