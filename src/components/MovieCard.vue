<script>
    // import {store} from '../store.js';

    export default {
        props: ['info'],
        // data() {
        //     return{
        //         store
        //     }
        // }
    }
</script>

<template>
    <!-- <div class="card">
        <img src="https://www.filmsite.org/posters/exorcist3.jpg" alt="">
    </div> -->

    <ul>
        <li>
        
            <h3>1. {{movie.title}}</h3>
            <h5>2. {{movie.original_title}}</h5>
            <h5>3. {{movie.original_language}}</h5>
            <h5>4. {{movie.vote_average}}</h5>
        
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    
</style>