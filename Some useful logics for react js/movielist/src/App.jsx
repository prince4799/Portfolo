import { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './App.css'
import NavBar from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    < div >
      <NavBar/>
    </div>
  )
}

export default App
