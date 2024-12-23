import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ width, onSearch, style, color }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Type hero name..."
      className="search-box"
      style={{ width: width, backgroundColor: color, ...style }}
    />
  );
};

export default SearchBox;
