<script>
    // import {store} from '../store.js';

    export default {
        props: ['movie'],
        data() {
            return{
                flagsURL: 'src/assets/img/',
                customURL: '',
                flagsOutcomes: [
                    'en',
                    'it',
                    'de',
                    'fr',
                    'es'
                ]
            }
        },
        methods: {
            matchFlags(){
                
                // this.flagsURL += `${this.movie.original_language}.jpg`;
                
                this.customURL = this.flagsURL + `${this.movie.original_language}.png`;

                console.log(this.customURL);
            }
        },
        mounted() {
            
            this.matchFlags();
        
        }
    }
</script>

<template>
    <!-- <div class="card">
        <img src="https://www.filmsite.org/posters/exorcist3.jpg" alt="">
    </div> -->

    
        <li v-if="movie.media_type == 'tv' || movie.media_type == 'movie'">
            <a href="#">

                <h3>{{movie.title}}</h3>

                <h3 v-if="movie.media_type == 'tv'">
                    {{movie.name}}
                </h3>

                <h5 v-if="movie.original_name !== movie.name">
                    {{movie.original_name}}
                </h5>
                
                <h5 v-if="movie.original_title !== movie.title">
                    {{movie.original_title}}
                </h5>
                
                <h5>
    
                    <img v-if="flagsOutcomes.includes(movie.original_language)" class="flag" :src="customURL" alt="">
                    
                    <img class='flag' src="src/assets/img/missing.png" alt="" v-else>
                    
                    -
                    
                    {{movie.original_language}}
                </h5>
                
                <h5>{{movie.vote_average}}</h5>

            </a>
        
        </li>
    
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    a {
        color: #fff;

        h5 {

            .flag {
                width: 25px;
            }
        }
    }
    
</style>