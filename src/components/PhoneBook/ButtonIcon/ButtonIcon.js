import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchButton } from './ButtonIcon.styled';

export default class ButtonIcon extends Component {
  render() {
    const { children = null, onClick = () => null, ...allyProps } = this.props;
    return (
      <StyledSearchButton type="button" onClick={onClick} {...allyProps}>
        {children}
      </StyledSearchButton>
    );
  }
}

ButtonIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
