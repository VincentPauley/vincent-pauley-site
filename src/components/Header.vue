<template>
    <header class="jumbotron">
        <div class="container">
            <h1>{{ header }}</h1>
            <div class="sub-header-wrapper">
                <p>{{ sub_header }}</p>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                header: 'Vinnie Pauley',
                sub_header: 'Vincent "Vinnie" Pauley is a senior software engineer working out of Chicago.'
            }
        }
    }
</script>

<style lang="scss">

    $jumbo_bg_left: #ff215e;
    $jumbo_bg_right: #ef5a2d;

    $shadow_color: #5f5f5f;

    header {
        background: $jumbo_bg_right; // < default bg
        background-image: linear-gradient(33deg, $jumbo_bg_left, $jumbo_bg_right);
    }
    // overwrite bootstrap jumbotron defaults
    header.jumbotron {
        border-radius: 0px;
        margin-bottom: 0px;
    }
    header > .container > h1 {
        font-size: 10vw;
        color: white;
        text-shadow: 2px 2px 2px $shadow_color;
    }

    @media screen and (max-width: 400px ) {
        header > .container > h1 {
            font-size: 30px;
            text-align: center;
        }
    }

    .sub-header-wrapper {
        padding: 5px 10px;
        background-color: #FFF;
        border-radius: 4px;
        color: #615858;
        box-shadow: 2px 2px 2px $shadow_color;
        display: inline-block;
    }
</style>