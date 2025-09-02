import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components//Navbar/Navbar'
import Avtar from './Components/Avtar/Avtar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Certificate from './Components/Certificate/Certificate'

const App = () => {
  return (
    
   <Router>
    
    <Routes>
      <Route path="/" element={
        <>
        <Navbar/>
      <Avtar/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer />
     </>
      }
      />
      <Route path="/Certificate" element={<Certificate/>}/>

    </Routes>
   </Router>
    
  );
};

export default App
