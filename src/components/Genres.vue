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
            // callForGenre(){
            //     axios
            //     .get(this.callGenres)
            //     .then(res => {
                
            //         this.genreList = res.data.genres;

            //         console.log(this.genreList);
                
            //     })
            //     .catch(err => {

            //         console.log('errori' , err);

            //     })
            // },
            findGenre(){
                
                let genreURL = this.callGenresFirst + this.movie.media_type + '/' + this.movie.id + this.callGenresSecond + store.api_key; 
                
                // if(this.movie.media_type == 'movie') {
                axios
                .get(genreURL)
                .then(res => {
                    
                    this.genreList = res.data.genres;

                    console.log(genreURL, this.genreList);
                
                })
                // }
            }
            
        },
        mounted() {
            // this.callForGenre();
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
            // display: flex;
            color: $primary-color;
            // gap: .5rem;
            font-size: 15px;
        }
    }
</style>