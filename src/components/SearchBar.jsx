import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="border rounded px-3 py-1 w-full"
      />
      <button
        type="submit"
        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
