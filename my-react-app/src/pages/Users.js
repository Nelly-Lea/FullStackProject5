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
    return ( <EssaiContext.Provider value={items}> <div>  <p className='font_color hello_name'>Hello {current_user.name}</p>
    <nav className='navbarul '>
      <ul className='navul'>
      <li className='navli'><Link  to="albums" className='font_color navLink' onClick={()=>setResourceType('albums')}>Albums</Link></li>
      <li className='navli'><Link to="posts" className='font_color navLink'  onClick={()=>setResourceType('posts')}>Posts</Link></li>
      <li className='navli'><Link to="todos"className='font_color navLink' onClick={()=>setResourceType('todos')}>Todos</Link></li>
      <li className='navli'><Link to="infos"className='font_color navLink' >Infos</Link></li>
      <li><button className='logout_button' onClick={Logout}>Logout</button></li>
      </ul>
    </nav>
   
    <Outlet />
   
    </div>
    </EssaiContext.Provider>
    
    );
  };