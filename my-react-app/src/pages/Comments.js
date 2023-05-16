
import { PostContext } from "./Posts";
import { useState , useEffect, useContext} from "react";
export function Comments (){
  const post_id=useContext(PostContext);
  const[allitems, setAllItems]= useState([])
  const[comments, setComments]= useState([])
 

  async function fetchData(){
    
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const json = await response.json();
      setAllItems(json)
     
      
 

  }
  useEffect(() => {
   fetchData();
   setComments(allitems.filter(com=> com.postId==post_id))
   
  }, [allitems,post_id]);
  


    return (<div>
      <p>COMMENTS: </p>
      <ul>
       { comments.map((item) =>{return <div key={item.id}><li >
            <p> {item.name}</p> <p>{item.email}</p><p>{item.body}</p></li></div>})}
      </ul>
    </div>);
  };