import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Testemonials from './components/Testimonials/Testemonials';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero/>
      <About/>
      <Testemonials/>
    </div>
  );
}

export default App;
