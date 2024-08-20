import { useEffect, useState } from "react";
import { Book } from "../../interface/Book";
import HorizontalScroll from "../horizontal-scroll/horizontal";
import BookRecommendations from "./book-recommendations";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books?year=2024&page=0&size=10")
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
      <div className="space-y-6">
        <HorizontalScroll books={books} title="New releases" />
        <BookRecommendations />
      </div>
    </div>
  );
};

export default Books;
