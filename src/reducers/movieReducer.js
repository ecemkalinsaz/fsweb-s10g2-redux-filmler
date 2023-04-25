import { toggleFavorites } from '../actions/favoritesActions.js';
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    default:
      return { ...initialState };
  }
}

export default reducer;