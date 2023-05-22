import React from 'react';
import { BtnForm, Form, Input } from './Search.styled';
import PropTypes from 'prop-types';

const Search = ({ handleSubmit, query, updateQueryString }) => {
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
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </BtnForm>
        <Input
          className="input"
          placeholder="Type your text"
          required=""
          type="text"
          value={query}
          onChange={updateQueryString}
        />
      </Form>
    </>
  );
};

Search.propTypes = {
  handleSubmit: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  updateQueryString: PropTypes.string.isRequired,
};

export default Search;
