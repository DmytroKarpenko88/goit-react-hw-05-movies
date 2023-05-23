import React, { useState } from 'react';
import { BtnForm, Form, Input } from './Search.styled';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

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
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
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
