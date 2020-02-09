import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';
import { notesSelectors, notesActions } from '../../modules/notes';

const mapStateToProps = state => ({
  value: notesSelectors.getFilter(state),
});

const mapDispatchToProps = { onChange: notesActions.filter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
