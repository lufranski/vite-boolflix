<script>
    // import {store} from '../store.js';

    export default {
        props: ['movie'],
        data() {
            return{
                flagsArray: ['./src/assets/img/ukusa.jpg']
            }
        }
    }
</script>

<template>
    <!-- <div class="card">
        <img src="https://www.filmsite.org/posters/exorcist3.jpg" alt="">
    </div> -->

    <ul>
        <li>
        
            <h3>{{movie.title}}</h3>
            <h5 v-if="movie.original_title !== movie.title">
                {{movie.original_title}}
            </h5>
            <h5>
                <img class='flag' :src="flagsArray[0]" alt="">
                -
                {{movie.original_language}}
            </h5>
            <h5>3. {{movie.vote_average}}</h5>
        
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    li {
        color: #fff;

        h5 {

            .flag {
                width: 20px;
            }
        }
    }
    
</style>