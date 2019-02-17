<template>
    <header class="jumbotron">
        <h1>{{ header }}</h1>
        <div class="sub-header-wrapper">
            <p>{{ sub_header }}</p>
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
    header.jumbotron {
        border-radius: 0px;
    }
    header > h1 {
        font-size: 72px;
        color: white;
        text-shadow: 2px 2px 2px $shadow_color;
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