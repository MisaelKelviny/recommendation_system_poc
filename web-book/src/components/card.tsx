import { StarIcon } from "lucide-react";
import { Book } from "../interface/Book";

const Card = ({ book }: { book: Book }) => {
  return (
    <div className="w-[300px] h-full overflow-hidden rounded-lg shadow-md bg-zinc-700 hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
      <img
        className="w-full h-96 object-cover opacity-30"
        src={book.cover}
        alt={book.title}
      />
      <div className="absolute bottom-0">
        <div className="px-6">
          <div className="text-zinc-100 font-bold text-xl mb-2">
            {book.title}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-col">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {book.author}
          </span>
          <span className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-zinc-200 mr-2 mb-2">
            <StarIcon fill="#facc15 " className="text-yellow-400" /> {book.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
