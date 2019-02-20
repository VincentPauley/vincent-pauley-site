<template>
    <div>
        <Header></Header>
        <NavBar></NavBar>

        <!-- Output Routes -->
        <router-view></router-view> 
    </div>
</template>


<script>

    // necessary components
    import Header from './Header.vue';
    import NavBar from './NavBar.vue';

    export default {
        components: { Header, NavBar }
    }
</script>