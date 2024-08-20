import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Book } from "../../interface/Book";
import Card from "../card";

const HorizontalScroll = ({
  books,
  title,
}: {
  books: Book[];
  title: string;
}) => {
  return (
    <div className="space-y-5 flex flex-col">
      <div className="flex justify-between w-full">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ChevronRightIcon />
      </div>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap">
          {books.map((b) => (
            <Link
              to={`/books/detail/${b.id}`}
              key={b.id}
              className="shrink-0 inline-block px-3"
            >
              <Card book={b} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
