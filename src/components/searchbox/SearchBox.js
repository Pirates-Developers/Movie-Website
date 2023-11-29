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
    <div onSubmit={handleSubmit} role="search" className="search-div">
      <input
        className="search-input"
        id="search"
        type="search"
        placeholder="ძებნა &nbsp; &#61442;"
        autoFocus
        required
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
