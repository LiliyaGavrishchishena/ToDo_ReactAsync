import { combineReducers } from 'redux';
import notesReducer from './notes/notesReducer';
import filterReducer from './notes/filterReducer';
import loadingReducer from './notes/loadingReducer';
import errorReducer from './notes/errorReducer';

export default combineReducers({
  loading: loadingReducer,
  notes: notesReducer,
  filter: filterReducer,
  error: errorReducer,
});
