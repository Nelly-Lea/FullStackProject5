// Albums.js
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { EssaiContext } from "./Users";

export function Albums() {
  const items = useContext(EssaiContext);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [current_user, setCurrentUser] = useState(user);
  const albums_list = items.filter((album) => album.userId === current_user.id);

  return (
    <div>
      <p>ALBUMS</p>
      <ul>
        {albums_list.map((item) => (
          <li key={item.id}>
            <Link to={`/users/${current_user.id}/albums/${item.id}/photos`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
