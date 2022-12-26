import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap-icons/font/bootstrap-icons.css"


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
createApp(App)
// .use(store)
.use(router)
.mount('#app')

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import "bootstrap/dist/js/bootstrap.js"