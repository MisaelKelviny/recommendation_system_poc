import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        className="border border-zinc-400 p-2 w-2/6 mx-auto"
        value={search}
        placeholder="Your favorite Book"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
