import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/Number'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AnimatedCursor from 'react-animated-cursor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color='0, 0, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Navbar/>
    <Hero/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Number/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
