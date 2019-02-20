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
            
            <ul class="navbar-nav list-group">
                <router-link tag="li" to="/" class="nav-item list-group-item">
                    <a href="#">Home</a>
                </router-link>
                <router-link tag="li" to="/about" class="nav-item list-group-item">
                    <a href="#">About</a>
                </router-link>
            </ul>
        </div>


        
    </nav>
    
</template>

<script>
    export default {}
</script>