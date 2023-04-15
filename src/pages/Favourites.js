import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export function Favourites() {
  const { books, markAsReadHandler, addToFavouriteHandler } =
    useContext(DataContext);
  return (
    <div>
      <h1>Favourites</h1>
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
          favourites && (
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
              <button disabled={read} onClick={() => markAsReadHandler(id)}>
                {!read ? "Mark as read" : "Already Read"}
              </button>{" "}
              <button
                disabled={favourites}
                onClick={() => {
                  addToFavouriteHandler(id);
                }}
              >
                {!favourites ? "Add to favourite" : "Go to fav"}
              </button>
            </div>
          )
      )}
    </div>
  );
}
