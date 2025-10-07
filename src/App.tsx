import './App.css'
import Hero from './layout/hero'
import Navbar from './layout/NavBar'

function App() {

  return (
    <>
      <header className='font-sans fixed inset-0 z-50'>
        <Navbar></Navbar>
      </header>
      <main className='font-sans'>
        <Hero></Hero>
      </main>
      <footer></footer>
    </>
  )
}

export default App
