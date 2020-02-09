import axios from 'axios';
import actions from './notesActions';

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/notes');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('http://localhost:3001/notes', { text, completed: false })
    .then(responce => {
      dispatch(actions.addNoteSuccess(responce.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:3001/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const toggleNote = note => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .patch(`http://localhost:3001/notes/${note.id}`, {
      completed: !note.completed,
    })
    .then(() => {
      dispatch(actions.toggleNoteSuccess(note.id));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchNotes, addNote, deleteNote, toggleNote };
