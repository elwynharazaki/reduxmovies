import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import SelectionReducer from './SelectionReducer';

const reducer = combineReducers({
   movies: MovieReducer,
   selectedMovieId: SelectionReducer
});

export default reducer;
