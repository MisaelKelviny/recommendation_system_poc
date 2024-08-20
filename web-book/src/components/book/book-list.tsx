import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Book } from "../../interface/Book";
import { getByGenre, getBySearch } from "../../services/bookServices";
import Card from "../card";

const BookList = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const result = searchParams.get("genre")
      ? getByGenre(searchParams.get("genre")!)
      : getBySearch(searchParams.get("search")!);

    result.then((response) => response.json()).then((data) => setBooks(data));
  }, [searchParams]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap gap-5">
        {books.map((b) => (
          <Card key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
