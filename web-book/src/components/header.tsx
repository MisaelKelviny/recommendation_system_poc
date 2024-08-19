import { BookCopy } from "lucide-react";
import { Link } from "react-router-dom";
import Search from "./search";

const Header = () => {
  return (
    <div className="flex pb-5 px-5">
      <Link to={"/"}>
        <BookCopy className="size-9 text-purple-900" />
      </Link>
      <Search />
    </div>
  );
};

export default Header;
