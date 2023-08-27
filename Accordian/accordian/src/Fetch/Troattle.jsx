import React, { useState } from 'react';
import useThrottle from './useThrottle'; // Adjust the path based on your file structure

function Throatle() {
  const [search, setSearch] = useState('');
  const [throttledSearch, setThrottledSearch] = useThrottle(search, 1000);

  const handleInputChange = event => {
    setSearch(event.target.value);
    setThrottledSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search"
      />
      <p>Actual search: {search}</p>
      <p>Throttled search: {throttledSearch}</p>
    </div>
  );
}

export default Throatle;
