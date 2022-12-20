<script>
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        props: ['movie'],
        data(){
            return{
                store,
                castList: [],
                castCallMovie: 'https://api.themoviedb.org/3/',
                castCallMovie2:'/credits?api_key=381a82bd8b02866089d3f125535bf53d&language=en-US',
                baseCastImg: 'https://image.tmdb.org/t/p/',
                castImgWidth: 'w45/',
            }
        },
        methods: {
            getCast(){

                let castUrl = this.castCallMovie + this.movie.media_type + '/' + this.movie.id + this.castCallMovie2;

                axios
                .get(castUrl)
                .then(res => {
                    
                    this.castList = res.data.cast;

                    console.log(this.castList);

                })
                .catch(err => {

                    console.log('errori' , err);

                })
            },
            buildCastImg(actor){

                return this.baseCastImg + this.castImgWidth + actor.profile_path;

            },
            sliceCast(){

                return this.castList.slice(0, 5);

            },
            showCast(){
                
                store.displayCast = true;
            
            },
            
        },
       
    }
    
</script>

<template>
    <div class="cast" @mouseenter="showCast()">
        <p class="click-for-cast" @click="getCast()">
            Click to show cast
        </p>

        <div class="cast-info" v-if="store.displayCast" v-for="actor in sliceCast()" :key="actor">
            <div class="img">
                <img :src="buildCastImg(actor)" alt="">
            </div>
            
            <div class="text">
                <h5 class="name">
                    {{ actor.name }}
                </h5>
    
                <h5 class="role">
                    as 
                    <b>
                        {{ actor.character }}
                    </b>
                </h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .click-for-cast {
            
        color: $primary-color;
        text-decoration: underline;
        font-weight: bolder;

    }

    .cast-info {
        display: flex;
        gap: .5rem;
        margin: 10px 0;

        .text {
            align-self: center;

            .name {
                color: $primary-color;
            }

            .role {
                font-size: 12px;
            }
        }
    }
</style>