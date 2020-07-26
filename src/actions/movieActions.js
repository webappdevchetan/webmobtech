import * as types from "./actionTypes";

export const setCategory = data => ({
    type: types.SET_CATEGORY,
    data
});

export const setSearch = data => ({
    type: types.SET_SEARCH,
    data
});
export const setMovies = data => ({
    type: types.SET_MOVIE,
    data
});