/* creating an atom for the Todo state
An Atom in a single slice of state. 
Components can subscribe (use them) to an atom 
and if an atom updates that will be reflected in the component that uses that atom

When you create an atom you have to give it a default state and a key
*/
import { atom } from "recoil";

export const todoState = atom ({
    key: "todoState",
    default: [],  // empty array for our todos
})