<script >
    import MovieCard from './MovieCard.vue';

    import {store} from '../store.js';

    export default {
        components: { MovieCard },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
  <div class="container">
    
    <MovieCard v-for="movie in store.movieList" :key="movie.id" :info="movie"/> 

  </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .container {
        padding: 1rem;        
        border: 1px solid #000;
        border-radius: 10px;
        margin: 40px 20px;
        display: flex;
        flex-wrap: wrap;
        // DEBUG
        height: 400px;
    }
</style>