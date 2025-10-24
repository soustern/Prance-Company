import { useEffect, useState } from 'react'
import './App.css'
import About from './layout/About'
import AnimationWrapper from './layout/AnimationWrapper'
import Brands from './layout/brands'
import Footer from './layout/footer'
import Hero from './layout/hero'
import Navbar from './layout/NavBar'
import Services from './layout/Services'

function App() {

  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
            await document.fonts.ready.then(() => setFontsReady(true));
    }

    loadFonts();
  }, [])

  // TODO: Add correct links for navBar in desktop

  return (
    <>
      <header className='font-sans fixed inset-0 z-100 pointer-events-none'>
        <Navbar></Navbar>
      </header>
      <main className='font-sans relative bg-[#0d1824]'>
        <AnimationWrapper></AnimationWrapper>
        <Hero fontsReady={fontsReady}></Hero>
        <About fontsReady={fontsReady}></About>
        <Services fontsReady={fontsReady}></Services>
        <Brands fontsReady={fontsReady}></Brands>
      </main>
      <footer className='font-sans'>
        <Footer fontsReady={fontsReady} ></Footer>
      </footer>
    </>
  )
}

export default App
