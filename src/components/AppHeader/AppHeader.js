import React from 'react';
import NoteFilter from '../NoteFilter';
import styles from './AppHeader.module.css';

const AppHeader = () => (
  <header className={styles.header}>
    <NoteFilter />
  </header>
);

export default AppHeader;
