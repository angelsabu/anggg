import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import View from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WELCOME TO MYPRODUCTS</h1>
    <Navbar/>
      <Add/>
      <View/>
      </>
    )
};

export default App
