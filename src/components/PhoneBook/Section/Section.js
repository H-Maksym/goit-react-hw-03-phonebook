import s from './Section.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// <Section title=""></Section>

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h2 className={s.header}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
