import React, { useState } from "react";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the search logic here
    console.log("Searching for:", searchTerm);
    // You can then call an API or filter data based on searchTerm
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
        placeholder="ძებნა &#61442;"
        autoFocus
        required
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBox;
