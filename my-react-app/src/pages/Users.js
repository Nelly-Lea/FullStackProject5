//import { Link } from "react-router-dom";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState , useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const EssaiContext = createContext();

export function Users (){
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [current_user, setCurrentUser] = useState(user);
  const [resourceType, setResourceType]=useState('')
  const [showInfos, setShowInfos]=useState(false)
  const[items, setItems]= useState([])
  const navigate = useNavigate();

  async function fetchData(){
    if(resourceType!=''){
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const json = await response.json();
      setItems(json)
    }
 

  }

  useEffect( ()=> {
    fetchData();
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    // .then(response =>response.json())
    // .then(json =>setItems(json));
    // const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
    // const list = await response.json();

  }, [resourceType])
  
  function Logout(){
   
    navigate("/login")
    localStorage.removeItem('currentUser');

  }
    return ( <EssaiContext.Provider value={items}> <div>  <p>Hello {current_user.name}</p>
    <nav>
      <ul>
      <li><Link to="albums" onClick={()=>setResourceType('albums')}>Albums</Link></li>
      <li><Link to="posts"  onClick={()=>setResourceType('posts')}>Posts</Link></li>
      <li><Link to="todos"onClick={()=>setResourceType('todos')}>Todos</Link></li>
      <li><Link to="infos" >Infos</Link></li>
      <li><button onClick={Logout}>Logout</button></li>
      </ul>
    </nav>
   
    <Outlet />
   
    </div>
    </EssaiContext.Provider>
    
    );
  };