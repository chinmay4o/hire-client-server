import './App.css'
import React, {useState} from "react";
import "./scss/style.css"
import "./scss/mobile.css"
import "./components/about/scss/aboutstyle.css";
import { Route } from "react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Leadership from "./components/about/Leadership"
import Leadership1 from "./components/about/Leadership1"
import Hinduja from "./components/about/Hinduja"
import Plans from "./components/plans/Plans"
import Faq from "./components//faq/Faq"
import Contact from "./components/contact/Contact"
import Navbar from "./components/Navbar/Navbar"
import Modal from "./components/Modal"

function App() {

  return (
    <>
    <Modal />
    <Navbar />
    
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/leadership">
    <Leadership1 />
    </Route>
    <Route path="/hinduja">
    <Hinduja />
    </Route>
    <Route path="/plans">
    <Plans />
    </Route>
    <Route path="/faq">
    <Faq />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </>
  );
}

export default App;
