import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Input.styled';
export default class Input extends Component {
  render() {
    const { type, titleInput, name, value, pattern, title, handleInputChange } =
      this.props;
    return (
      <LabelStyled>
        {titleInput}
        <InputStyled
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          pattern={pattern}
          title={title}
          required
        />
      </LabelStyled>
    );
  }
}

Input.propTypes = {
  titleInput: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
