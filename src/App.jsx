import React from 'react'
import Navbar from './Components//Navbar/Navbar'
import Avtar from './Components/Avtar/Avtar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Avtar/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer />
      
    </div>
  )
}

export default App
