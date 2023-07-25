import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios';
import BootstrapVue3 from "bootstrap-vue-3";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
// import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import './scss/app.scss';
// import { library } from '@fortawesome/fontawesome-svg-core'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { faUserSecret, faSearch } from '@fortawesome/free-solid-svg-icons'

// library.add(faUserSecret)
// library.add(faSearch)

const app = createApp(App);
  app.use(store)
  app.use(BootstrapVue3)
  app.use(BootstrapIconsPlugin)
  // app.component('font-awesome-icon', FontAwesomeIcon)
  app.config.globalProperties.axios=axios;
  app.mount('#app')
