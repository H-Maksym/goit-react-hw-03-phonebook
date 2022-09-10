import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledFilterLabel, StyledFilterInput } from './Filter.styled';
import ButtonIcon from 'components/PhoneBook/ButtonIcon';
import { BsSearch } from 'react-icons/bs';

import Box from 'components/PhoneBook/Box';

export default class Filter extends Component {
  render() {
    const { title = '', name, value, changeFilter, handleSearch } = this.props;
    return (
      <StyledFilterLabel>
        {title}
        <StyledFilterInput name={name} value={value} onChange={changeFilter} />
        <Box position="absolute" right="20%">
          <ButtonIcon
            type="submit"
            onClick={handleSearch}
            aria-label="search button"
          >
            <BsSearch size="20px" />
          </ButtonIcon>
        </Box>
      </StyledFilterLabel>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
