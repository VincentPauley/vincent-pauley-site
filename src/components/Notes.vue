<template>
    <div>
        <h1>Notes</h1>

        <label for="note-name">Title</label>
        <input id="note-name" class="form-control" type="text" v-model="title">

        <label for="note-name">Content</label>
        <textarea id="note-name" class="form-control" v-model="content"></textarea>

        <button class="btn btn-primary" @click="submit_new_note">Add</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                title: '',
                content: ''
            }
            
        },
        methods: {
            submit_new_note() {
                
                console.log( '== New Note Submit' );

                console.log( this.title );
                console.log( this.content );

                this.title = '';
                this.content = '';
            }
        }
    }
</script>