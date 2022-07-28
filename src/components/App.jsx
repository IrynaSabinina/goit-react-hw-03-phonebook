import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { FindElement } from './FindElement/FindElement';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitHandlerAddContacts = data => {
    this.state.contacts.find(contact => contact.name === data.name)
      ? alert('This contacts allrady in')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  hendleChangeFindElement = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  addAvaliableList = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  
  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log('hello');
    }
  }

  contactDelete = key => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== key),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmitHandlerAddContacts} />
        <FindElement
          filter={this.state.filter}
          hendleChangeFindElement={this.hendleChangeFindElement}
        />
        <ContactsList
          contacts={this.addAvaliableList()}
          contactDelete={this.contactDelete}
        />
      </div>
    );
  }
}
