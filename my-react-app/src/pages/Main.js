import './main.css';
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

export function Main() {
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


  return (
    <div className="menu-container">
      <p>Hello {current_user.name}</p> 
      <div className="button-container">
        <button onClick={() => setResourceType('albums')}>Albums</button>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
        <button onClick={() => setShowInfos(!showInfos)}>Infos</button>
        <button onClick={Logout}>Logout</button>
        {showInfos ? (
          <div className="info-container">
            <p>Your infos</p>
            {/* Info details */}
          </div>
        ) : null}
        {/* Other content */}
      </div>
    </div>
  );
}  
