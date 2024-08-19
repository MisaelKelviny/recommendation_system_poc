import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../interface/Book";
import Card from "../card";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books?year=2024&limit=10")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="flex flex-1 flex-col space-y-5">
      <div>
        <h1 className="text-4xl mx-auto font-bold my-10">
          📖 Welcome to the book shop!!
        </h1>
      </div>
      <div className="space-y-5 flex flex-col">
        <h2 className="text-xl font-semibold">Lançamentos</h2>

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

      {/* <div className="space-y-5">
        <h2 className="text-xl font-semibold">Recomendado para você</h2>
        <div>
          {books.map((b) => (
            <Card key={b.id} book={b} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Books;
