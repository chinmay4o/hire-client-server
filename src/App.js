import logo from './logo.svg';
import './App.css'
import "./scss/style.css"
import { Route ,Switch, Link } from "react-router-dom";
import Home from "./components/home/Home"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
    <Navbar />

    <Route exact path="/">
    <Home />
    </Route>
    </>
  );
}

export default App;
