// Albums.js
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { EssaiContext } from "./Users";
import albumImage from "../images/image.jpg";

import "./Albums.css"; // Import the CSS file for styling

export function Albums() {
  const items = useContext(EssaiContext);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [current_user, setCurrentUser] = useState(user);
  const albums_list = items.filter((album) => album.userId === current_user.id);

  return (
    <div>
      <p className="albums-heading">ALBUMS</p>
      <ul className="albums-list">
        {albums_list.map((item) => (
          <li key={item.id} className="album-item">
            <Link to={`/users/${current_user.id}/albums/${item.id}/photos`}>
              <div className="album-thumbnail">
                <img src={albumImage} alt={item.title} />
              </div>
              <p className="album-title">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
