import './App.css';
import React from 'react';
import Header from './Layouts/Header';
import HomePage from './Layouts/HomePage';
import About from './Layouts/About';
import Vegetables from './Layouts/Vegetables';
import Client from './Layouts/Client';
import Contact from './Layouts/Contact';
import Footer from './Layouts/Footer';
function App() {
  return (
    <div className="App">
   <Header/>
   <HomePage/>
   <About/>
   <Vegetables/>
   <Client/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
