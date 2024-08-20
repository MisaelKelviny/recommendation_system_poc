import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../interface/Book";
import BookRecommendations from "./book-recommendations";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex h-full items-center gap-8 pt-40">
        <div className="flex w-2/4 items-center justify-center">
          <img src={book.cover} alt={book.title} className="object-cover" />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">{book.title}</h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
          </div>
          <div>
            <p className="font-semibold">About the book:</p>
            <p>{book.description}</p>
          </div>
          <div className="pt-10">
            <p>
              <strong>Genre:</strong> {book.genre}
            </p>
            <p>
              <strong>Editor:</strong> {book.editor}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <BookRecommendations />
      </div>
    </div>
  );
};

export default BookDetails;
