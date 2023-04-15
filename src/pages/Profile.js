import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export function Profile() {
  const { user } = useContext(DataContext);
  console.log(user.img);
  return (
    <>
      <h1>Profile</h1>
      <img style={{ width: "450px", height: "250px" }} src={user.img} />
      <h2>{user.name}</h2>
      <p>
        <strong>Bio: </strong>
        {user.bio}
      </p>
    </>
  );
}
