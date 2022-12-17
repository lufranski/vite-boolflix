<script>
    import {store} from '../store.js';

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
                ],
                movieRating: '',
                numberOfRegStars: '',
                store
            }
        },
        methods: {
            matchFlags(){
                
                this.customURL = this.flagsURL + `${this.movie.original_language}.png`;

                console.log(this.customURL);
            },
            posterPath(){

                return this.store.baseUrl+'w185'+this.movie.poster_path;

            },
            ratingConverter(){

                // Vecchio range da 0 a 10, per cui la sottrazione tra max 10 e min 0 darebbe comunque 10
                let oldRange = 10;

                // Stessa cosa per il nuovo range, max di 5 e min di 1
                let newRange = 5 - 1;

                // Il nuovo rating verrà arrotondato grazie a Math.round
                this.movieRating = Math.round(((this.movie.vote_average) * newRange) / oldRange);

            },
            starNumberCalc() {

                this.numberOfRegStars = 5 - this.movieRating;

            }
        },
        mounted() {
            
            this.matchFlags();

            this.ratingConverter();

            this.starNumberCalc();
        
        }
    }
</script>

<template>

    <li v-if="movie.media_type == 'tv' || movie.media_type == 'movie'">
        <a href="#">

            <div class="poster">

                <img v-if="movie.poster_path" :src="posterPath()" alt="">

                <img v-else src="../assets/img/missingposter.jpg" alt="">
            
            </div>

            <div class="info">

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
                    
                <div class="ratings">
                    
                    <font-awesome-icon v-for="n in movieRating" icon="fa-solid fa-star" />

                    <font-awesome-icon  v-for="x in numberOfRegStars" icon="fa-regular fa-star" />

                </div>
            </div>

        </a>
        
    </li>
    
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    a {
        color: #fff;

        .poster {
            width: 185px;
        }

        h5 {

            .flag {
                width: 25px;
            }
        }

        .ratings {
            color: yellow;
        }
    }
    
</style>