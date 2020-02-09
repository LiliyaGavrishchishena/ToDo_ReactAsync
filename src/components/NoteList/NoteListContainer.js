import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList';
import { notesSelectors, notesOperations } from '../../modules/notes';

class NoteListContainer extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { fetchNotes: _, ...restProps } = this.props;
    return <NoteList {...restProps} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getFilteredNotes(state),
});

const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote,
  toggleNote: notesOperations.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
