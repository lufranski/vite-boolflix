import { reactive } from "vue";

export const store = reactive ({
    movieList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=381a82bd8b02866089d3f125535bf53d&language=en-US&page=1&include_adult=false&query=',
    trendingUrl: 'https://api.themoviedb.org/3/trending/all/week?api_key=381a82bd8b02866089d3f125535bf53d',
    movieQuery: '',
    baseUrl: 'https://image.tmdb.org/t/p/',
    displayTrends: true,
    castList: [],
    castCallMovie: 'https://api.themoviedb.org/3/',
    castCallMovie2:'/credits?api_key=381a82bd8b02866089d3f125535bf53d&language=en-US',
});