import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return <StyledNotification>{message}</StyledNotification>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
