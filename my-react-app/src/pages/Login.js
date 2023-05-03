import "../styles.css"
import { useState, useEffect  } from "react";

export function Login() {
  const [user, setUser] = useState({ username: "", password: ""});

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(json =>console.log(json))

    setUser({ username: "", password:"" });
  };
  // useEffect(() => {
  //   console.log("salut")
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   // .then(response=> response.json())
  //   // .then(json =>console.log(json))

  // return () => setUser({ username: "", password:"" })
  // }, [user]);
  
    return(
      <div >
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
  
 