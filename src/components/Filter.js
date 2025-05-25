
import React from 'react';

function Filter({ filterTitle, setFilterTitle, filterRating, setFilterRating }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={e => setFilterTitle(e.target.value)}
      />
      <select
        value={filterRating}
        onChange={e => setFilterRating(Number(e.target.value))}
      >
        <option value={0}>All Ratings</option>
        {[1, 2, 3, 4, 5].map(r => (
          <option key={r} value={r}>{r} & up</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
