import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { FindElement } from './FindElement/FindElement';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitHandlerAddContacts = data => {
    console.log(data);
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
