import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (query.trim() === "") {
      alert(`Please Enter a City`);
    } else {
      alert(`Searching...`);
      alert(`${query}`);
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a query" onChange={updateQuery} />
      <input type="submit" value="Search" />
    </form>
  );
}
