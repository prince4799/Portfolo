

import React, { useState } from 'react';
import './index.css';




function App() {

  const [curr, setCurr] = useState('')
  const [tasks, setTasks] = useState([])

  const handleSubmit = () => {
    if(curr!='')
   { setTasks([ curr,...tasks])
    setCurr('')}
  }

  const deleteTodos=(id)=>{
    tasks.splice(id, 1)
    setTasks([...tasks])
  }
 

  return (
    <div className="App">
      <input type='text' value={curr}  title='ty' placeholder='Enter tasks' onChange={(e) =>  setCurr(e.target.value)} />
      <button onClick={()=>handleSubmit()} >ADD</button>
      <h2>YOUR TODOS WILL SHOW HERE</h2>
      {tasks.map((item, index) => (
        <ul  key={index}>
          <li >
            {item}
          </li>
          <button onClick={()=>deleteTodos(index)} >DELETE</button>
        </ul>
      ))}
    </div>
  );
}
export default App;


