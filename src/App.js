import { NavLink, Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Read } from "./pages/Read";
import { Favourites } from "./pages/Favourites";
import { Profile } from "./pages/Profile";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

function App() {
  const { favouritesTotal } = useContext(DataContext);
  return (
    <div className="App">
      <nav>
        <NavLink to="/">All Books</NavLink> ||{" "}
        <NavLink to="/favourites">{`Favourites(${favouritesTotal})`}</NavLink> ||{" "}
        <NavLink to="/read">Read</NavLink> ||{" "}
        <NavLink to="/profile">Profile</NavLink>{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
