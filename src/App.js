import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Cursor from './components/Cursor/cursor';


function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
