import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import { totalTodos } from './state/TotalTodos';
import { useRecoilValue } from 'recoil';

function App() {

  const totalTodoState = useRecoilValue(totalTodos)

  return (
      <div className='App'>
        <h1>To do list</h1>
        <Todos />
        <h3>Total ToDo's: {totalTodoState} </h3>  
        <div>
          <h3>This is just a counter. No relation to the ToDo's</h3>
          <Counter />
        </div>
      </div>

  );
}

export default App;

