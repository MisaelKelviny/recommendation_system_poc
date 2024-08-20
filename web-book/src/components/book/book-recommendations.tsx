import { useEffect, useState } from "react";
import { Book } from "../../interface/Book";
import HorizontalScroll from "../horizontal-scroll/horizontal";

const BookRecommendations = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books?year=2021`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <HorizontalScroll books={books} title="Recommended for you" />
    </div>
  );
};

export default BookRecommendations;
