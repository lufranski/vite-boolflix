<script>
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        props: {
            movie: Object
        },
        data() {
            return{
                store,
                genreList: [],
                callGenresFirst: 'https://api.themoviedb.org/3/',
                callGenresSecond: '?api_key='
            }
        },
        methods: {
            findGenre(){
                
                let genreURL = this.callGenresFirst + this.movie.media_type + '/' + this.movie.id + this.callGenresSecond + store.api_key; 
                
                axios
                .get(genreURL)
                .then(res => {
                    
                    this.genreList = res.data.genres;
                
                })
            }
            
        },
        mounted() {
            this.findGenre();
        },
    }
</script>

<template>
    <div class="genres">
        <h4>Genres:</h4>

        <ul>
            <li v-for="genre in this.genreList">
                #{{genre.name}}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .genres {
        display: flex;
        gap: .5rem;

        h4 {
            font-weight: 900;
        }
        
        ul {
            color: $primary-color;
            font-size: 15px;
        }
    }
</style>