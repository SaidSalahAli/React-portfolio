import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projectes from "./Components/Projectes";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Particless from "./Components/Particless";
// import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";


function App() {
  AOS.init();
  return (
    <>
      <div  
        className="l-main ">
          
        <Navbar />
        <Particless />
        <Home />
        <About />
        <Skills />
        <Projectes />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
