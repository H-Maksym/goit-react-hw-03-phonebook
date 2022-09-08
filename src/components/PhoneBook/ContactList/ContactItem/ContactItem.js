import s from './ContactItem.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
  render() {
    const { id, name, number, onDelContact } = this.props;
    return (
      <>
        <p className={s.value}>{name}</p>
        <p className={s.value}>{number}</p>
        <button type="button" className={s.btn} onClick={onDelContact} id={id}>
          Delete
        </button>
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
