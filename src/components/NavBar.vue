<template>
    <nav class="navbar navbar-expand-lg  navbar-light bg-light">

        <!-- leave for now, Brand styling with router link
        <router-link class="navbar-brand" tag="li" to="/">
            <a href="#">Vinnie Pauley</a>
        </router-link>
        -->

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-options">
            <font-awesome-icon icon="bars"/>
        </button>


        <div class="collapse navbar-collapse" id="navigation-options">
            
            <ul class="navbar-nav">
                <router-link tag="li" to="/" class="nav-item">
                    <a href="#">Home</a>
                </router-link>
                <router-link tag="li" to="/about" class="nav-item">
                    <a href="#">About</a>
                </router-link>
                <router-link tag="li" to="/notes" class="nav-item">
                    <a href="#">Notes</a>
                </router-link>
                <router-link tag="li" to="/auth" class="nav-item">
                    <a href="#">Auth</a>
                </router-link>
            </ul>
        </div>


        
    </nav>
    
</template>

<script>
    export default {}
</script>