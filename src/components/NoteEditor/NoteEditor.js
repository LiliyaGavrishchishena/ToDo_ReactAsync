import React, { Component } from 'react';
import styles from './NoteEditor.module.css';

export default class NoteEditor extends Component {
  state = { text: '' };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addNote } = this.props;
    const { text } = this.state;
    addNote(text);

    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h1 className={styles.add}>Add a new ToDo!</h1>
          <div>
            <input
              className={styles.input}
              placeholder="Add a new ToDo!"
              required
              value={text}
              onChange={this.handleChange}
            />
            <button className={styles.submit} type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
}
