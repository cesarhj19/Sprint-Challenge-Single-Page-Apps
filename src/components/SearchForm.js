import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState({ name: '' });

  const handleInputChange = e => {
    setSearch({ ...search, name: e.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.name)}>
        <input
          onChange={handleInputChange}
          placeholder="Search"
          value={search.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
