import './App.css'

import About from './components/About'
import Contact from './components/Contact'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

    </>
  )
}

export default App