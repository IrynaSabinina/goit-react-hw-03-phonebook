import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  hendleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const contactId = nanoid();

    this.props.onSubmit({ ...this.state, id: contactId });
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.inputIn}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.inputIn}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.hendleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.btnAdd} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}
