// entry point of the application

import Vue from 'vue';
import '../styles/main.scss';

import App from '../components/App.vue';

new Vue({
    el: '#app',
    render: h => h(App)
});