import "../styles.css"
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({ username: "", password: ""});
  const navigate = useNavigate();

  async function handleSubmit (event) {
   //  let users_list;
     event.preventDefault();
     const response = await fetch('https://jsonplaceholder.typicode.com/users');
     const users_list = await response.json();
    
   //   console.log(users_list)
   
    // users_list=fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=> {return response.json()})
    // .then(json =>{return json})
    if(users_list!=null){
      let i;
     for(i=0;i<users_list.length; i++){
      if(users_list[i].username==user.username)
      {
        if(users_list[i].address.geo.lat.slice(-4)==user.password)
        {
          //alert("good user")
          localStorage.setItem("currentUser",JSON.stringify(users_list[i])) //  Maybe put all user information from rest api
          setUser({ username: "", password:"" });
          navigate(`/users/${users_list[i].id}`)
          return;
         // break
        }
        else{
          alert("error in password")
          return;
        }
      }
     }

     if(i==users_list.length){
      alert("username not found")
      setUser({ username: "", password:"" });
     }
    
    }

   
  };
  // useEffect(() => {
  //   console.log("salut")
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   // .then(response=> response.json())
  //   // .then(json =>console.log(json))

  // return () => setUser({ username: "", password:"" })
  // }, [user]);
  
    return(
      <div className="login" >
      <form className='form_registration' onSubmit={handleSubmit} > 
          <label className='title_label'>
              Username: 
          </label><br />
          <input className='input_field' type="text" name="username" value={user.username} required   onChange={(e) => setUser(previousState=>{ return { ...previousState, username: e.target.value}})}></input>
          <br />
          <label className="title_label" htmlFor="password_login">Password</label><br />
          <input className="input_field"  id="password_login" type="password" value={user.password} required onChange={(e) => setUser(previousState=>{ return { ...previousState, password: e.target.value}})}/>
          <input className='submit_button' type="submit" value="Login"></input>
          
      </form>
      </div>


    );
  };
  
 