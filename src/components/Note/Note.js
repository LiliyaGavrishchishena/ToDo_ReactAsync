import React from 'react';
import styles from './Note.module.css';

const Note = ({ text, completed, onDelete, onToggleCompleted }) => (
  <div className={styles.note}>
    <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </p>

    <hr />
    <footer className={styles.footer}>
      <label>
        Done
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
      </label>

      <button onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </footer>
  </div>
);

export default Note;
