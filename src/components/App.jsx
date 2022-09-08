import { Notify } from 'notiflix/build/notiflix-notify-aio';

import React, { Component } from 'react';
import Section from 'components/PhoneBook/Section';

import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';

import ContactList from 'components/PhoneBook/ContactList';
import Notification from 'components/PhoneBook/Notification';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  /** checks if a contact exists in contacts list*/
  existContact = name => {
    const { contacts } = this.state;
    return contacts.find(
      data => data.name.toLowerCase() === name.toLowerCase()
    );
  };

  /** submit event handler*/
  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    if (this.existContact(contact.name)) {
      return Notify.info('Such a contact already exists');
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  /** event handler filter*/
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value.trim(),
    });
  };

  /** calculated value for filter*/
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(data => {
      return data.name.toLowerCase().includes(normalizeFilter);
    });
  };

  /** delete contact from list*/
  onDelContact = e => {
    const key = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== key),
    }));
  };

  /** render*/
  render() {
    const { contacts, filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div
        style={{
          width: '450px',
          height: 'auto',
          padding: '20px',
          // minHeight: '100vh',
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 30,
          // color: '#010101',
        }}
      >
        <h1>React homework</h1>
        <Section title="Phonebook">
          <ContactForm title="" onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Filter
                title="search"
                name="filter"
                value={filter}
                changeFilter={this.changeFilter}
              />
              <ContactList
                contacts={this.getVisibleContacts()}
                onDelContact={this.onDelContact}
              />
            </>
          ) : (
            <Notification message="There are no contacts" />
          )}
        </Section>
      </div>
    );
  }
}
