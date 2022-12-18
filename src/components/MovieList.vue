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
    
    <ul>

        <MovieCard v-for="movie in store.movieList" :key="movie.id" :movie="movie"/> 
    
    </ul>

  </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .container {
        padding: 1rem;        
        border-radius: 10px;
        overflow-x: auto;
        
        ul {
            display: flex;
            gap: .2rem;
        }
    }
</style>