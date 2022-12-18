<script>
    import SearchBar from './SearchBar.vue';

    import {store} from '../store.js';

    import axios from 'axios';

    export default {
        components: {SearchBar},
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

    <header>

        <div class="logo">
            <!-- <img src="" alt=""> -->
            B
        </div>

        <div class="search-bar">

            <SearchBar @browseMovies="getMovies()"/>
        
        </div>
    
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    header {
        background-color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;

        .logo {
            color: $primary-color;
            font-size: 30px;
        }

        .search-bar {
            width: 60%;
        }
    }

</style>