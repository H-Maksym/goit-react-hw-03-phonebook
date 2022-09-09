import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/PhoneBook/Input';
import Button from 'components/PhoneBook/Button';
import { FormContact } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!(name && number)) {
      console.log('Enter your contact information');
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormContact onSubmit={this.handleSubmit}>
        {/* {title && <h2>{title}</h2>} */}
        <Input
          type="text"
          titleInput="name"
          name="name"
          value={name}
          handleInputChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Input
          type="tel"
          titleInput="number"
          name="number"
          value={number}
          handleInputChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button type="submit">Add contact</Button>
      </FormContact>
    );
  }
}

ContactForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};
