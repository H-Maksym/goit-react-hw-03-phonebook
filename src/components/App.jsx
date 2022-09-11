import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import React, { Component } from 'react';

//* Components 
import Title from 'components/PhoneBook/Title';
import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import ContactList from 'components/PhoneBook/ContactList';
import Notification from 'components/PhoneBook/Notification';
import Box from 'components/PhoneBook/Box';
import Modal from 'components/PhoneBook/Modal';
import AddContact from 'components/PhoneBook/AddContact'

import {notifyConfigs} from 'config/notifyConfig'


// import ProgComponents from 'components/PhoneBook';
// const {Section, ContactForm,Filter,ContactList,Notification}=ProgComponents;


export default class App extends Component {

  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  /**get contacts from Locale Storage */  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts){
      this.setState({ contacts: parsedContacts });
      }
  }

  /**set contacts from Locale Storage */  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
       localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
     }
  }
  

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
      return Notify.info('Such a contact already exists',notifyConfigs);
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

  /** event handler filter*/
  handleSearch = e => {
    console.log("clickBtn");
      // this.setState({
      // filter: e.currentTarget.value.trim(),
      // });
  }

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

  handleIconClose = e => {
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  /** render*/
  render() {
    const { contacts, filter,showModal} = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
    <>
        <Box
          mx='auto'
          px={15}
          py={0}
          display='flex'
          flexDirection='column'
          alignItems='center'
          width={450} as='section'
        >
          <h1>React</h1>
          <Title>
            Phonebook
          </Title>
          <AddContact  toggleModal={this.toggleModal} />
        {showModal&& <Modal onClose={this.toggleModal}>
            <ContactForm title="Fill in the contact details" onSubmit={this.formSubmitHandler} toggleModal={ this.toggleModal} />
          </Modal>}
        </Box>
        
        <Box
          mx='auto'
          px={15}
          py={0}
          display='flex'
          flexDirection='column'
          // alignItems='center'
          width={450}
          as='section'
        >
          <Title>
            Contacts
          </Title>
          {contacts.length ? (
            <>
              <Filter
                name="filter"
                value={filter}
                changeFilter={this.changeFilter}
                handleSearch={this.handleSearch}
              />
              <ContactList
                contacts={this.getVisibleContacts()}
                onDelContact={this.onDelContact}
              />
            </>
          ) : (
            <Notification message="There are no contacts" />
          )}
        </Box>
    </>
    );
  }
}
