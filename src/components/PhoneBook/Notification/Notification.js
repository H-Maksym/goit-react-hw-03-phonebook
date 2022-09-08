import s from './Notification.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={s.text}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
