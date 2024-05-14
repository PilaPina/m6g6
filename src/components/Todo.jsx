import { useSetRecoilState } from "recoil"
import { todoState } from "../state/todoState"


export default function Todo({text, id}) {
    // useSetRecoilState hook gets the setter function for the todoState atom
    const setTodos = useSetRecoilState(todoState)  //pass in the atom

    // Function to delete a todo
    function deleteTodo(){
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)  //passing every todo to this filter function
        })
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}