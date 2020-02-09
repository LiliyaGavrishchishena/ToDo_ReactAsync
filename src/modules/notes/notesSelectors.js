const getNotes = state => state.notes;
const getFilter = state => state.filter.toLowerCase();

const getFilteredNotes = state => {
  const notes = getNotes(state);
  const filter = getFilter(state);
  return notes.filter(note => note.text.toLowerCase().includes(filter));
};

export default { getNotes, getFilter, getFilteredNotes };
