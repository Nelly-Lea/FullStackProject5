import { useState , useEffect, useContext, createContext} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {EssaiContext} from "./Users"
export const PostContext = createContext();

export function Posts (){
    const items=useContext(EssaiContext);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [current_user, setCurrentUser] = useState(user);
    const [current_postid, setCurrentPostId] = useState('');
    const [isBold, setBold] = useState(false);
    const [currentBold, setCurrentBold] = useState('');
    //  const[showComments, setShowComments]=useState(false)
    // const[prevPostId, setprevPostId]=useState('')

  const navigate = useNavigate();
 //   const [current_post_id, setCurrentPost] = useState('');
    //console.log(items)
    const posts_list=items.filter(post=> post.userId==current_user.id)
//    const navigate = useNavigate();

    // function Post_id(post_id){
    //     navigate(`/posts/${post_id}`)
    // }
    function Show_Comments(post_id){
        navigate(`/users/${current_user.id}/posts/${post_id}/comments`)
        // if(current_postid!=''){
        //     setprevPostId(current_postid)
        // }
        setCurrentPostId(post_id)
       // setShowComments(!showComments)

    }
    function Bold(id){
        setCurrentBold(id)
        navigate(`/users/${current_user.id}/posts/${id}`)

        // setBold(!isBold)
        // if(isBold){
        //     e.currentTarget.style.fontWeight='bold';
        // }
        // else{
        //     e.currentTarget.style.fontWeight='normal';
        // }
       
        
    }

   
    
    return(<PostContext.Provider value={current_postid}><div>
        <p>POST LIST: </p>
        <ul>
        {posts_list.map((item) =>{return <div key={item.id} className="post_div"><li   onClick={()=>Bold(item.id)} style={ item.id==currentBold ? { fontWeight:'bold'} : {}} >
            <p> {item.title}</p> <p>{item.body}</p></li>
            <div><button onClick={()=>Show_Comments(item.id)}>Comments</button></div> 
            {current_postid==item.id?<Outlet/>:null}</div>})}
        </ul>
    </div></PostContext.Provider>)
}