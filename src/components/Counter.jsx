// This is my Counter component. It uses the useRecoilState hook to subscribe to the counterState atom. 

import React from 'react';
import '../App.css';
import { useRecoilState } from 'recoil';
import { counterState } from '../state/counterState';


function Counter() {
      // useRecoilState hook subscribes to the counterState atom
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div className='Count'>
        {/* Display the current count */}
      Click counter:   {count}
        {/* Increment the count by 1 */}
      <div className='Buttons'>
        <button className='Button' onClick={() => setCount(count + 1)}>+</button>
          {/* Button to decrement the count */}
        <button className='Button' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
