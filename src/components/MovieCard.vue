<script>
    import {store} from '../store.js';
    import CardInfo from './CardInfo.vue';
    
    export default {
        components: { CardInfo },
        props: ["movie"],
        data() {
            return {
                store
            };
        },
        methods: {
            posterPath() {
                return this.store.baseUrl + "w342" + this.movie.poster_path;
            },
        }
    }    
</script>

<template>

    <li v-if="movie.media_type == 'tv' || movie.media_type == 'movie'">
        <a href="#">

            <div class="poster">

                <img v-if="movie.poster_path" :src="posterPath()" alt="">

                <img v-else src="../assets/img/missingposter.jpg" alt="">
            
                <CardInfo :movie="movie" class="hoverable"/>
            </div>


        </a>
        
    </li>
    
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    a {
        color: #fff;

        .poster {
            width: 342px;
            position: relative;

            &:hover .hoverable {
                display: block;
                position: absolute;
                top: 10%;
                left: 5%;
                right: 5%;
                background-color: rgba(0, 0, 0, .95);
                border-radius: 0 16px 0 16px;
                padding: 3rem;
                height: 70%;
                overflow-y: auto;
            }
        }

    }
    
</style>