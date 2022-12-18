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
        store,
        displayTrends: 'true'
      }
    },
    methods: {
      getMovies(){

        axios
        .get(store.trendingUrl)
        .then(res => {
          
          store.movieList = res.data.results;
        
        })
        .catch(err => {

          console.log('errori' , err);

        })
      },
      startQuery(){

        this.displayTrends = 'false';

      }
      
    },
    mounted() {
      this.getMovies();
    }
  }
</script>

<template>
  
  <AppHeader />
  
  <div class="label">

    <h4 v-if="store.movieQuery == '' " class="trending-now">
      <i>Trending Now</i>
    </h4>
  
    <h4 v-else class="query-result">
      <i>Results</i>
    </h4>

  </div>


  <MovieList />

</template>

<style lang="scss">
  @use '../src/style/general.scss' as *;
  @use './style/partials/variables' as *;

  .label {
    padding: .1rem 1rem;
    border-radius: 16px 0 16px 0;
    position: absolute;
    left: 5%;
    top: 12%;
    background-color: rgba( $primary-color, .75);
    z-index: 200;

    h4 {
      font-size: 40px;
      color: $secondary-color;
      font-weight: 900;
    }
  }
  
</style>
