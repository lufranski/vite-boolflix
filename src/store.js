import { reactive } from "vue";

export const store = reactive ({
    movieList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=381a82bd8b02866089d3f125535bf53d&query=horror',
    movieQuery: '',
});