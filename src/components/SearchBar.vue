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
    <input type="text" v-model="store.movieQuery" placeholder="Search ...">

    <div class="button" @click="$emit('browseMovies')">
      Search
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .container {
        // background-color: #000;
        display: flex;
        justify-content: space-between;
        padding: 1rem;        
        .button {
            color: $primary-color;
            border: 1px solid $primary-color;
            border-radius: 16px 0 16px 0;
        }

        input {
            width: 70%;
            padding-left: .5rem;
            border-radius: 16px 0 16px 0;
            font-weight: 900;
            appearance: none;
            border: none;
            outline: none;
            background: none;
            background-color: rgba(255, 255, 255, .5);
            transition: 0.4s;

            &:focus {
                border-radius: 0 16px 0 16px;
                background-color: rgba(255, 255, 255, .75);
            }
        }
    }
</style>