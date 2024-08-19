import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BookDetails from "./components/book/book-detail";
import BookList from "./components/book/book-list";
import Books from "./components/book/books";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/books/detail/:id",
        element: <BookDetails />,
      },
      {
        path: "/books/genre/:genre",
        element: <BookList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
