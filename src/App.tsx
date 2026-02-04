import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className='relative flex flex-col justify-center items-center min-h-screen py-2'>
      {/* <h1>Candy K</h1> */}
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
