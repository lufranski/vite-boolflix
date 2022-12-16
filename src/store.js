import { reactive } from "vue";

export const store = reactive ({
    movieList: [],
    apiUrl: 'https://rickandmortyapi.com/api/character',
    movieQuery: '',
});