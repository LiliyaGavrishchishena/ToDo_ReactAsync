import React from 'react';
import Note from '../Note/Note';
import styles from './NoteList.module.css';

const NoteList = ({ notes = [], deleteNote, toggleNote }) => (
  <>
    <div className={styles.list}>
      {notes.map(note => (
        <Note
          key={note.id}
          {...note}
          onDelete={() => deleteNote(note.id)}
          onToggleCompleted={() => toggleNote(note)}
        />
      ))}
    </div>
  </>
);

export default NoteList;
