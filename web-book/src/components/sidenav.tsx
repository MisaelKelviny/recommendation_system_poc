import { Link } from "react-router-dom";
import { genres } from "../data/genres";

const SideNav = () => {
  return (
    <div className="w-2/12 flex flex-col space-y-3 p-2">
      {genres.map((g) => (
        <Link className="hover:underline" to={`/books/genre/${g}`} key={g}>
          {g}
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
