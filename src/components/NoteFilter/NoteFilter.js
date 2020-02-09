import React from 'react';
import styles from './NoteFilter.module.css';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    type="text"
    placeholder="Search..."
    className={styles.filter}
  />
);

export default NoteFilter;
