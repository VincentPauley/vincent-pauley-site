

<template>
    <button type="button" @click="test" class="btn btn-success">Test</button>
</template>

<script>

    import axios from 'axios';

    export default {
        methods: {
            test: function() {

                axios.post( 'http://localhost:3000/test', {
                    user: 'vinnie :)'
                })
                    .then(  x  => {

                        console.log( '>> Successful Response' );
                        console.log( x );
                    }).catch( e => {

                        console.log( '>> Error' );
                        console.log( e );
                    });







                console.log( 'test' );

                console.log( axios );
            }
        }
    }
</script>