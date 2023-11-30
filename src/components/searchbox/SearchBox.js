import "./search-box.css";
import React, { useState } from "react";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
    // call API or filter data
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const spaceSymbol = `\u00A0`;
  const searchSymbol = `\uF002`;

  return (
    <div onSubmit={handleSubmit} role="search" className="search-div">
      <input
        className="search-input"
        id="search"
        type="search"
        placeholder={!isFocused ? `ძებნა ${spaceSymbol} ${searchSymbol}` : ""}
        required
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SearchBox;
