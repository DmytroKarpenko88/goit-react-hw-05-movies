import React, { useState } from 'react';
import { BtnForm, Form, Input } from './Search.styled';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { ReactComponent as IconSearch } from '../../svg/search.svg';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notify.failure('Enter the request');
      return;
    }

    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value.trim());
  };

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <BtnForm type="submit">
          <IconSearch />
        </BtnForm>
        <Input
          className="input"
          placeholder="Type your text"
          required=""
          type="text"
          value={query}
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
