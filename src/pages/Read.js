import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export function Read() {
  const { books } = useContext(DataContext);
  return (
    <div>
      <h1>Read</h1>
      {books.map(
        ({
          id,
          title,
          author,
          publisher,
          year,
          image,
          price,
          read,
          favourites,
        }) =>
          read && (
            <div className="card" key={id}>
              <img src={image} />
              <p>
                <small>{id}</small>
              </p>
              <p>
                <b>{title}</b>
              </p>
              <p>
                <small>Author: {author}</small>
              </p>
              <button>Buy now</button>
              <button>Remove from fav</button>
            </div>
          )
      )}
    </div>
  );
}
