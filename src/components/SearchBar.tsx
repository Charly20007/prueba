import { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Buscar categoria..."
      className="w-full px-4 py-2 border rounded-lg mt-4"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;

