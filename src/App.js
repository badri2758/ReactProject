import logo from './logo.svg';
import React, { useState , useEffect} from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Preloader from './components/Pre';
import "./style.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  const[load,updateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (

    <Router>
     <Preloader load={load} />
      <div className='App' id={load ? "no-scroll " : "scroll"} >
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
     

    </Router>
  );
}

export default App;
