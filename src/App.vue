<script >
  import SearchBar from './components/SearchBar.vue';
  import MovieList from './components/MovieList.vue';

  export default {
    components: {
      SearchBar,
      MovieList
    }
  }
</script>

<template>
  <SearchBar />
  
  <MovieList />
</template>

<style lang="scss">
  @use '../src/style/general.scss' as *;
  @use './style/partials/variables' as *;
  
</style>
