<script >
    import {store} from '../store.js';

    export default {
        data() {
            return{
                store,
            }
        }
    }
</script>

<template>
  <div class="container">
    <input type="text" v-model="store.movieQuery">

    <div class="button" @click="$emit('browseMovies')">
      Search
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .container {
        background-color: #000;
        display: flex;
        justify-content: space-between;
        padding: 1rem;        
        .button {
            color: #fff;
            border: 1px solid #fff;
            border-radius: 10px;
        }
    }
</style>