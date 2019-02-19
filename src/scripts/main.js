// entry point of the application

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

import '../styles/main.scss';

import App from '../components/App.vue';
import routes from './routes.js';

new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
});
