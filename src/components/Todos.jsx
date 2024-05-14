import '../App.css';
import { todoState } from '../state/todoState';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Todo from './Todo';


export default function Todos () {
    // useRecoilState hook subscribes to the todoState atom
    const [todos, setTodos] = useRecoilState(todoState); //passing the todo atom here
    const [inputText, setInputText] = useState('')

    // Function to add a new todo
    function addTodo() {            
        setTodos((prevTodos) => [...prevTodos, {id: Math.random(), text: inputText}])
        setInputText('')
    }
    
     // Function to handle input change
    function handleInputChange(e) {
        setInputText(e.target.value)
    }
    console.log({todos})

    // Function to clear all todos
    function clearTodos(){
        setTodos([])
    }

    return (
        <main className='Todo'>
            <input className='Form' value={inputText} onChange={handleInputChange} type="text" id="todoInput" />
            <div className='Buttons'>
                <button className="Button" onClick={addTodo}>Add ToDo</button>
                <button className="Button" onClick={clearTodos} >Clear ToDo's</button>
            </div>
            {
                todos.map((todo) => {
                    return (
                    <Todo key={todo.id} text={todo.text} id={todo.id} />
                    )
                })
            }
        </main>
    )
}