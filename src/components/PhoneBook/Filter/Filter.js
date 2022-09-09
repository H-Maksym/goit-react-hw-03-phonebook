import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledFilterLabel,
  StyledFilterInput,
  StyledSearchButton,
} from './Filter.styled';
import { BsSearch } from 'react-icons/bs';
// import { Box } from 'components/PhoneBook/Box/Box';
// import Button from 'components/PhoneBook/Button';

export default class Filter extends Component {
  render() {
    const { title = '', name, value, changeFilter } = this.props;
    return (
      // <Box position="relative">
      <StyledFilterLabel>
        {title}
        <StyledFilterInput name={name} value={value} onChange={changeFilter} />
        <StyledSearchButton type="submit">
          <BsSearch />
        </StyledSearchButton>
      </StyledFilterLabel>
      // </Box>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
