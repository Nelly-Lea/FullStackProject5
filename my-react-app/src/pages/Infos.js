import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
export function Infos (){
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [current_user, setCurrentUser] = useState(user);
    return (
      <div>
            <p>Your infos</p>
            <p>username: {current_user.username}</p>
            <p>email: {current_user.email}</p>
            <p>address:</p>
            <p>street: {current_user.address.street}</p>
            <p>suite: {current_user.address.suite}</p>
            <p>city: {current_user.address.city}</p>
            <p>zipcode: {current_user.address.zipcode}</p>
            <p>geolocalation: {current_user.address.geo.lat}, {current_user.address.geo.lng}</p>
            <p>phone: {current_user.phone}</p>
            <p>website: {current_user.website}</p>
            <p>company: </p>
            <p>name: {current_user.company.name}</p>
            <p>catchphrase: {current_user.company.catchPhrase}</p>
            <p>bs: {current_user.company.bs}</p>
          </div> 
    );
  };