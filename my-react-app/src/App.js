//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login"
import {Main} from "./pages/Main"
import {Redirect} from "./pages/Redirect"
import { NoPage } from "./pages/NoPage";

function App() {
  return (
      <Routes>

         <Route path="/" element={<Redirect />} />
         <Route path="login" element={<Login />} />
         <Route path="main" element={<Main />} />
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
