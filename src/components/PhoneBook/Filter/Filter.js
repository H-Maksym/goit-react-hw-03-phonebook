import s from './Filter.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { title, name, value, changeFilter } = this.props;
    return (
      <label className={s.label}>
        {title}
        <input
          className={s.input}
          name={name}
          value={value}
          onChange={changeFilter}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
