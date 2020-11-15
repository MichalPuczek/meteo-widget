import React from 'react';

// == IMPORT Styles
import './style.scss';

const SearchBar = ({ handleGetSearch, searchInput, handleGetSubmit }) => {
  return (
    <div className="input">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleGetSubmit();
        }}
      >
        <input 
          type="text"
          placeholder="Nouvelle ville..."
          onChange={(evt) => {
            const text = evt.target.value;
            handleGetSearch(text);
          }}
          value={searchInput}
          />
      </form>
    </div>
  )
};

export default SearchBar;