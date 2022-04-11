import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TopMenu from './layout/TopMenu';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <TopMenu></TopMenu>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/project" element={<Project/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
