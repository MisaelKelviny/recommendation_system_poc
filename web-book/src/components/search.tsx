import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center">
      <div className="flex w-2/6 items-center border border-zinc-400 ">
        <input
          type="text"
          className="w-full p-2 mx-auto outline-none"
          value={search}
          placeholder="Search your book..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? navigate(`/books?search=${search}`) : ""
          }
        />
        <Link to={`/books?search=${search}`} className="px-4">
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
};

export default Search;
