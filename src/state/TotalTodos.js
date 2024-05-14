/*
This is a selector file. Selectors represent a derived state. 
*/
import { selector } from "recoil";
import { todoState } from "./todoState";


export const totalTodos = selector({
    key: 'totalTodos',  //unique ID
    get: ({get}) => {      // object get property allows you to access any of your recoil states
        const ts = get(todoState);   

        return ts.length;   //how many todos I have within my todo state
    },
});