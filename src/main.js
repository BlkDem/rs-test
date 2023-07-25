import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import BootstrapVue3 from "bootstrap-vue-3";
// import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faSearch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faSearch)

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './scss/app.scss';

// import { BootstrapVueIcons } from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

createApp(App)
  .use(store)
  .use(BootstrapVue3)
  // .use(BootstrapVueIcons)
  .use(BootstrapIconsPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
