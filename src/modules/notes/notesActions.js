import notesActionTypes from './notesActionTypes';

const filter = text => ({
  type: notesActionTypes.FILTERED,
  payload: {
    filter: text,
  },
});

const fetchRequest = () => ({
  type: notesActionTypes.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: notesActionTypes.FETCH_SUCCESS,
  payload: {
    notes,
  },
});

const addNoteSuccess = note => ({
  type: notesActionTypes.ADD_SUCCESS,
  payload: {
    note,
  },
});

const deleteNoteSuccess = id => ({
  type: notesActionTypes.REMOVE_SUCCESS,
  payload: {
    id,
  },
});

const toggleNoteSuccess = id => ({
  type: notesActionTypes.TOGGLE_COMPLETED_SUCCESS,
  payload: {
    id,
  },
});

const fetchError = error => ({
  type: notesActionTypes.FETCH_ERROR,
  payload: {
    error,
  },
});

export default {
  addNoteSuccess,
  deleteNoteSuccess,
  toggleNoteSuccess,
  filter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
