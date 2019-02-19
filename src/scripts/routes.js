import VueRouter from 'vue-router';


let routes = [
    {
        path: '/',
        component: require( '../components/Home.vue' ).default
    },
    {
        path: '/about',
        component: require( '../components/About.vue' ).default
    }
];

export default new VueRouter({ routes });