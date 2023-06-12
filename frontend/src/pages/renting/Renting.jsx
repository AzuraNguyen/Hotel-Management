import './renting.css'
import { useState } from 'react';

function handleClickButton() {
  alert('Hoang ngu')
}


const Renting = () => {

  const [input, setInput] = useState('');
  return (
    <>
      
      <h1>abc</h1>
      <button onClick={handleClickButton}>click me</button>
      <input value={input}
            onChange={e => setInput(e.target.value)}/>
      My name is {input}
    </>
  )
}

export default Renting
