<template>
    <div>
        <Header></Header>


        <router-link tag="li" to="/">
            <a href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/about">
            <a href="#">About</a>
        </router-link>

        <!-- Output Routes -->
        <router-view></router-view> 
    </div>
</template>


<script>

    // necessary components
    import Header from './Header.vue';

    export default {
        components: { Header }
    }
</script>