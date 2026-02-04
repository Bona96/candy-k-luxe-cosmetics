import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative flex flex-col justify-center items-center min-h-screen py-2'>
      {/* <h1>Candy K</h1> */}
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
