<script >
  import axios from 'axios';

  import SearchBar from './components/SearchBar.vue';
  import MovieList from './components/MovieList.vue';
  
  import {store} from './store.js';

  export default {
    components: {
      SearchBar,
      MovieList
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies(){

        let myUrl = store.apiUrl;

        if(store.movieQuery !== '') {
          myUrl += `${store.movieQuery}` 
        }

        // Ricordarsi di far partire una chiamata API con i film/serie più popolari in seguito
        axios
        .get(myUrl)
        .then(res => {
          
          store.movieList = res.data.results;
        
        })
        .catch(err => {

          console.log('errori' , err);

        })
      }
      
    },
    mounted() {
      this.getMovies();
    }
  }
</script>

<template>
  <SearchBar @browseMovies="getMovies()"/>
  
  <MovieList />
</template>

<style lang="scss">
  @use '../src/style/general.scss' as *;
  @use './style/partials/variables' as *;
  
</style>
