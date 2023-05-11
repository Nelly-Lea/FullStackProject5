//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login"
import {Main} from "./pages/Main"
import {Redirect} from "./pages/Redirect"
import { NoPage } from "./pages/NoPage";
import { Infos } from "./pages/Infos";
import { Users } from "./pages/Users";
import { Albums } from "./pages/Albums";
import {Posts} from "./pages/Posts"
import { Todos } from "./pages/Todos";
import { Comments } from "./pages/Comments";


function App() {
  // const user = JSON.parse(localStorage.getItem('currentUser'));
  // const [current_user, setCurrentUser] = useState(user);
  return (
      <Routes>

         <Route path="/" element={<Redirect />} />
         <Route path="login" element={<Login />} />
            
          <Route path="users/:id" element={<Users />}>
             <Route path="infos" element={<Infos/>}/>
             <Route path="albums" element={<Albums/>}/>
             <Route path="posts" element={<Posts/>}>
              <Route path=":postId/comments"  element={<Comments/>}/>
              </Route>
              <Route path="posts/:postId" element={<Posts/>} />
             <Route path="todos" element={<Todos/>}/>
          </Route>
         {/* <Route path="users" element={<Main />} /> */}
         <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
