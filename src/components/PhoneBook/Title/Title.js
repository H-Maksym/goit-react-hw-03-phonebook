import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

export default class Title extends Component {
  render() {
    const { children } = this.props;
    return <StyledTitle>{children}</StyledTitle>;
  }
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
