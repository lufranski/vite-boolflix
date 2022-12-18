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

                axios
                .get(myUrl)
                .then(res => {
                
                    store.movieList = res.data.results;

                })
                
            }
        },
    }
                
    
</script>

<template>

    <header>

        <div class="logo">
            <a href="#">
                
                <img src="../assets/img/boolflix-logo.png" alt="">
                
            </a>
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
            font-size: 30px;
            width: 30%;

            a {
                color: #fff;
                
                img {
                    width: 65%;
                }

            }
        }

        .search-bar {
            width: 60%;
        }
    }

</style>