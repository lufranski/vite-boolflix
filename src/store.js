import { reactive } from "vue";

export const store = reactive ({
    movieList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=381a82bd8b02866089d3f125535bf53d&language=en-US&page=1&include_adult=false&query=',
    movieQuery: '',
    baseUrl: 'https://image.tmdb.org/t/p/'
});