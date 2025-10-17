import './App.css'
import About from './layout/About'
import AnimationWrapper from './layout/AnimationWrapper'
import Brands from './layout/brands'
import Hero from './layout/hero'
import Navbar from './layout/NavBar'
import Services from './layout/Services'

function App() {

  return (
    <>
      <header className='font-sans fixed inset-0 z-50'>
        <Navbar></Navbar>
      </header>
      <main className='font-sans relative'>
        <AnimationWrapper></AnimationWrapper>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Brands></Brands>
      </main>
      <footer></footer>
    </>
  )
}

export default App
