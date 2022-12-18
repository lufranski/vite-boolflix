<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';

  import MovieList from './components/MovieList.vue';
  
  import {store} from './store.js';

  export default {
    components: {
      MovieList,
      AppHeader
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
  
  <AppHeader />
  
  <MovieList />

</template>

<style lang="scss">
  @use '../src/style/general.scss' as *;
  @use './style/partials/variables' as *;
  
</style>
