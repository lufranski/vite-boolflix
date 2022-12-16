<script >
    import MovieCard from './MovieCard.vue';

    export default {
    components: { MovieCard }
}
</script>

<template>
  <div class="container">
    <MovieCard />
  </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .container {
        padding: 1rem;        
        border: 1px solid #000;
        border-radius: 10px;
        margin: 40px 20px;
        // DEBUG
        height: 400px;
    }
</style>