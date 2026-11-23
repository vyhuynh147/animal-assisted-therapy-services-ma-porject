
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./Navbar.jsx";
import "./App.css";

import {Home} from "./Home.jsx";
import {About} from "./About.jsx";
import {Programs} from "./Programs.jsx";
import {Contact} from "./Contact.jsx";



function App () {
  return (
    <BrowserRouter>
      <div className = "App">
        <Navbar/>

        <Routes>
          <Route path = "/" element = { <Home />} />
          <Route path = "/aboutus" element = { <About/>} />
          <Route path = "/programs" element = { <Programs />} />
          <Route path = "/contact" element = { <Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 