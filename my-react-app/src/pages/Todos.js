import './Todos.css';
import { useState , useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {EssaiContext} from "./Users"
export function Todos() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [todos, setTodos] = useState([]);
    const [sortingCriterion, setSortingCriterion] = useState('serial');
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.log(error));
    }, [user.id]);
  
    const handleSortingCriterionChange = event => {
      setSortingCriterion(event.target.value);
    };
  
    const sortTodos = (todos, criterion) => {
      switch (criterion) {
        case 'serial':
          return todos.sort((a, b) => a.id - b.id);
        case 'performance':
          return todos.sort((a, b) => a.completed - b.completed);
        case 'alphabetical':
          return todos.sort((a, b) => a.title.localeCompare(b.title));
        case 'random':
          return shuffleArray(todos);
        default:
          return todos;
      }
    };
  
    const shuffleArray = array => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    const sortedTodos = sortTodos(todos, sortingCriterion);
  

    function handleTodoCompletion(todoId) {
        setTodos(prevTodos =>
          prevTodos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
  
      
      return (
        <div className="todos-container">
          <h2>TODO LIST:</h2>
          <div className="sorting-container">
            <label htmlFor="sortingCriterion">Sort by:</label>
            <select id="sortingCriterion" value={sortingCriterion} onChange={handleSortingCriterionChange}>
              <option value="serial">Serial</option>
              <option value="performance">Performance</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="random">Random</option>
            </select>
          </div>
          <ul className="todo-list">
            {sortedTodos.map(todo => (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleTodoCompletion(todo.id)}
                  />
                  <span>{todo.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      );
    }