import s from './Input.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, titleInput, name, value, pattern, title, handleInputChange } =
      this.props;
    return (
      <label className={s.label}>
        {titleInput}
        <input
          className={s.input}
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          pattern={pattern}
          title={title}
          required
        />
      </label>
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
