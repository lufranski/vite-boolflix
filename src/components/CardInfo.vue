<script>
    export default {
        props: ['movie'],
        data() {
            return {
                flagsURL: "src/assets/img/",
                customURL: "",
                flagsOutcomes: [
                    "en",
                    "it",
                    "de",
                    "fr",
                    "es"
                ],
                movieRating: "",
                numberOfRegStars: "",
            };
        },
        methods: {
            matchFlags() {
                this.customURL = this.flagsURL + `${this.movie.original_language}.png`;
            },
            ratingConverter() {
                // Vecchio range da 0 a 10, per cui la sottrazione tra max 10 e min 0 darebbe comunque 10
                let oldRange = 10;
                // Stessa cosa per il nuovo range, max di 5 e min di 0
                let newRange = 5;
                // Il nuovo rating verrà arrotondato grazie a Math.ceil
                this.movieRating = Math.ceil(((this.movie.vote_average) * newRange) / oldRange);
            },
            starNumberCalc() {
                this.numberOfRegStars = 5 - this.movieRating;
            }
        },
        mounted() {
            this.matchFlags();
            this.ratingConverter();
            this.starNumberCalc();
        },
    }
</script>

<template>
    <div class="info">

        <h3>{{movie.title}}</h3>
            
        <h3 v-if="movie.media_type == 'tv'">
            {{movie.name}}
        </h3>
        
        <div class="original-title">
            <i>

                <h5 v-if="movie.original_name !== movie.name">
                    {{movie.original_name}}
                </h5>
                    
                <h5 v-if="movie.original_title !== movie.title">
                    {{movie.original_title}}
                </h5>
                
            </i>

        </div>

            
        <div class="lang">

            <img v-if="flagsOutcomes.includes(movie.original_language)" class="flag" :src="customURL" alt="">
                
            <img class='flag' src="src/assets/img/missing.png" alt="" v-else>
            
            <span class="original-lang">

                - {{movie.original_language.toUpperCase()}}
            
            </span>

        </div>
            
        <div class="ratings">

            <font-awesome-icon v-for="n in movieRating" icon="fa-solid fa-star" />

            <font-awesome-icon  v-for="x in numberOfRegStars" icon="fa-regular fa-star" />

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .info {

        .lang {
            .flag {
                width: 25px;
            }

            .original-lang {
                font-size: 12px;
            }
        }
    
        .ratings {
            color: #FFBF00;
        }
    }

</style>