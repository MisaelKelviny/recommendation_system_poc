import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../interface/Book";
import Card from "../card";

const BookList = () => {
  const { genre } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/genre/${genre}`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [genre]);

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
