import s from './ContactList.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/PhoneBook/ContactList/ContactItem';

export default class ContactList extends Component {
  render() {
    const { contacts, onDelContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.item}>
              <ContactItem
                id={id}
                name={name}
                number={number}
                onDelContact={onDelContact}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelContact: PropTypes.func,
};
