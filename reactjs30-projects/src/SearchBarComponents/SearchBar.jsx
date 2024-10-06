import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grapes',
    'Honeydew',
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
        <h1>search bar</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))
        ) : (
          <li className="no-results">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
