import { connect } from 'react-redux';
import { notesOperations } from '../../modules/notes';
import NoteEditor from './NoteEditor';

const mapDispatchToProps = { addNote: notesOperations.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
