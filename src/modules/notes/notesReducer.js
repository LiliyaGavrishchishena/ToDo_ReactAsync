import notesActionTypes from './notesActionTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case notesActionTypes.FETCH_SUCCESS:
      return payload.notes;

    case notesActionTypes.ADD_SUCCESS:
      return [...state, payload.note];

    case notesActionTypes.REMOVE_SUCCESS:
      return state.filter(note => note.id !== payload.id);

    case notesActionTypes.TOGGLE_COMPLETED_SUCCESS:
      return state.map(note =>
        note.id === payload.id ? { ...note, completed: !note.completed } : note,
      );

    default:
      return state;
  }
}

export default notesReducer;
