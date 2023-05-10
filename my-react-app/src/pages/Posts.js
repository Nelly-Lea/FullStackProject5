import { useState , useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {EssaiContext} from "./Users"
export function Posts (){
    const items=useContext(EssaiContext);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [current_user, setCurrentUser] = useState(user);
 //   const [current_post_id, setCurrentPost] = useState('');
    //console.log(items)
    const posts_list=items.filter(post=> post.userId==current_user.id)
//    const navigate = useNavigate();

    // function Post_id(post_id){
    //     navigate(`/posts/${post_id}`)
    // }
    return(<div>
        <p>POST LIST: </p>
        <ul>
        {posts_list.map((item) =>{return <li key={item.id} ><p> {item.title}</p> <p>{item.body}</p></li>})}
        </ul>
    </div>)
}