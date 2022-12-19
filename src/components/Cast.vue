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
                    
                    store.castList = res.data.results;

                    console.log(this.store.castList);

                })
                .catch(err => {

                    console.log('errori' , err);

                })
            },
        }
    }
    
</script>

<template>
    <div class="cast">
        <p class="click-for-cast" @click="getCast()">
            Click to show cast
        </p>

        <div v-if="displayCast" v-for="actor in castList.cast" :key="actor.id">
            {{ actor.name }}
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
</style>