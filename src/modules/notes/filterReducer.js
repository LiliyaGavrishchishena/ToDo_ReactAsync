import notesActionTypes from './notesActionTypes';

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case notesActionTypes.FILTERED:
      return payload.filter;

    default:
      return state;
  }
}

export default filterReducer;
