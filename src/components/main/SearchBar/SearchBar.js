import "./searchbar.css";
import React, { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // search logic here
    console.log("Searching for:", searchTerm);
    // call an API or filter data
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="search-form">
      <input
        className="search-input"
        id="search"
        type="search"
        placeholder="ძებნა"
        autoFocus
        required
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
