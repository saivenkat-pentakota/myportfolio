import React from 'react';
import './App.css';
import Header from '../src/components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
 <>
 <Header/>
 <main className='main'>
 <Home/>
 <About/>
 <Skills/>
 <Services/>
 <Qualification/>
 <Testimonials/>
 <Contact/>
 <Footer/>
 </main>
 
 
 </>
  );
}

export default App;
