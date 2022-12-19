<script>
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        props: ['movie'],
        data(){
            return{
                store,
                displayCast: false,
            }
        },
        methods: {
            getCast(){

                let castUrl = this.store.castCallMovie + this.movie.media_type + '/' + this.movie.id + this.store.castCallMovie2;

                console.log(castUrl);

                axios
                .get(castUrl)
                .then(res => {
                
                    this.displayCast = true;
                    
                    store.castList = res.data;

                    console.log(this.displayCast, res.data);

                })
                .catch(err => {

                    console.log('errori' , err);

                })
            },
            buildCastImg(){

                return this.store.baseCastImg + this.store.castImgWidth + this.store.castList.cast[0].profile_path;

            }
            
        },
    }
    
</script>

<template>
    <div class="cast">
        <p class="click-for-cast" @click="getCast()">
            Click to show cast
        </p>

        <div class="cast-info" v-if="displayCast" v-for="actor in store.castList.cast.slice(0,5)" :key="actor.credit_id">
            <div class="img">
                <img :src="buildCastImg(0)" alt="">
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