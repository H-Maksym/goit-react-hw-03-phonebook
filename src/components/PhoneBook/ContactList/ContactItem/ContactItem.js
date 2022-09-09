import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/PhoneBook/Button';
import { StyledTextList } from './ContactItem.styled';

export default class ContactItem extends Component {
  render() {
    const { id, name, number, onDelContact } = this.props;
    return (
      <>
        <StyledTextList>{name}</StyledTextList>
        <StyledTextList>{number}</StyledTextList>
        <Button onClick={onDelContact} id={id}>
          Delete
        </Button>
      </>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
