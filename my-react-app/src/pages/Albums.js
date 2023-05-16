import { useState , useEffect, useContext} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {EssaiContext} from "./Users"
export function Albums (){
    const items=useContext(EssaiContext);//
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [current_user, setCurrentUser] = useState(user);
    const [show_photos, setShowPhotos] = useState(false);
    const albums_list=items.filter(album=> album.userId==current_user.id)
    //console.log(items)
    return(<div>{show_photos? <Outlet/>:<div>
        <p>ALBUMS</p>
         <ul>
         {albums_list.map((item) =>{return <div key={item.id}><li >
            <Link to={item.id+"/photos"} onClick={()=>{setShowPhotos(!show_photos)}}><p> {item.title}</p></Link></li>
           </div>})}
         </ul>
         </div> }
         {/* <Outlet/> */}
    </div>)
}