import React from "react";

function SearchInput() {
  return (
    <div className="my-4">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="search term"
        />
      </div>
      <button className="btn btn-primary">GO</button>
    </div>
  );
}

export default SearchInput;