import notesActionTypes from './notesActionTypes';

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case notesActionTypes.FETCH_REQUEST:
      return null;

    case notesActionTypes.FETCH_ERROR:
      return payload.error;

    default:
      return state;
  }
}

export default errorReducer;
