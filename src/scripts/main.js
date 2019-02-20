// entry point of the application

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

import "bootstrap";

// icon stuff
import { library } from '@fortawesome/fontawesome-svg-core';

// import specific icons from font-awesome as needed
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// explicitly add icon components to the project
library.add(faCoffee);
library.add(faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon)

import '../styles/main.scss';

import App from '../components/App.vue';
import routes from './routes.js';

new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
});
