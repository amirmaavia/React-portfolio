import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/Home'
import Skills from './components/Skills'

import Projects from './components/Projects' 
import Contact from './components/contact'
import About from './components/About'
// import NotFound from './components/Not Found'

// import Certifictions from './components/Certifictions';

function App() {
  return (
   <div>
     
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    

    </div>
  );
}


export default App;
