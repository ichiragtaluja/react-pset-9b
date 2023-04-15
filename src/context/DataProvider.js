import { createContext, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const markAsReadHandler = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    selectedBook.read = !selectedBook.read;

    setBooks([...books]);
  };

  const addToFavouriteHandler = (id) => {
    const selectedBook = books.find((book) => book.id === id);

    if (selectedBook?.favourites) {
      navigate("/favourites");
    } else {
      selectedBook.favourites = true;
      setBooks([...books]);
    }
  };
  const favouritesTotal = books.reduce(
    (acc, book) => (book?.favourites ? acc + 1 : acc),
    0
  );

  const getBooks = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");
      if (response.status === 200) {
        setBooks(response.data.books);
        setUser(response.data.user);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <DataContext.Provider
      value={{
        books,
        addToFavouriteHandler,
        markAsReadHandler,
        favouritesTotal,
        user,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
