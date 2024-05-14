/* Here I export a Recoil atom which represents a piece of state. 
Atoms can be read from and written to from any component in the application. 
In this case, the atom represents the count state with a default value of 0.
*/

import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState', // unique ID 
  default: 0, // default value (aka initial value)
});
