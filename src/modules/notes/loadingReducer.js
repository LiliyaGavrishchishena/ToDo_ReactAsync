import notesActionTypes from './notesActionTypes';

function loadingReducer(state = false, { type }) {
  switch (type) {
    case notesActionTypes.FETCH_REQUEST:
      return true;

    case notesActionTypes.FETCH_SUCCESS:
    case notesActionTypes.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

export default loadingReducer;
