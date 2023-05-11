
import { PostContext } from "./Posts";
import { useState , useEffect, useContext} from "react";
export function Comments (){
  const post_id=useContext(PostContext);
  // console.log(post_id)
    return (<div>post id: {post_id}</div>);
  };