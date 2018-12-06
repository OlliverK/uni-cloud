import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='search center'>
      <input
        className='pa3 ba br4 b--orange bgdark'
        type='search'
        placeholder='Search'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;