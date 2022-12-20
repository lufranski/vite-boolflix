<script>
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        props: {
            movie: Object
        },
        data() {
            return{
                store
            }
        },
        methods: {
            callForGenre(){
                axios
                .get(store.callGenres)
                .then(res => {
                
                    store.genreList = res.data.genres;

                    console.log(store.genreList);
                
                })
                .catch(err => {

                    console.log('errori' , err);

                })
            },
            
        },
        mounted() {
            this.callForGenre();
        },
    }
</script>

<template>
    <div class="genres">
        <h4>Genres:</h4>

        <ul>
            <li v-for="genre in store.genreList">
                {{genre.name}}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .genres {
        display: flex;

        // ul {
            // display: flex;
        // }
    }
</style>