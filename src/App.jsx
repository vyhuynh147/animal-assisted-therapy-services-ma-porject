
import logo from './logo.png';
// import halfImg from "./halfimage.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import "./App.css";

function App () {
  return (
    <BrowserRouter>
    <div className = "App" >
      <Navbar />
    </div>


  <Routes>
    <Route path = "/" element = { <Home />} />
    <Route path = "/about-us" element = { <About />} />
    <Route path = "/programs" element = { <Programs />} />
    <Route path = "/Contact" element = { <Contact />} />
  </Routes>
  </BrowserRouter>
  );
}


// function App() {
//   return (
//     <div className="App"> 
//     <Navbar />
//     {/* <Imglogo /> */}
//     <Header /> 


//     </div>
//   );
// }



function Imglogo () {
  return (
    <div className="Logo">
      < img src = {logo} alt = "assma logo" className="Logo" />
    </div>
  ); 
}


function Navbar () {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href = "/"> HOME </a></li>
        <li><a href = "/about"> ABOUT US </a></li>
        <li><a href = "/programs"> PROGRAMS </a></li>
        <li><a href = "/Contact"> CONTACT US </a></li>
      </ul>
    </nav>
  );
}



function Header() {
  return (
    <div className= "Header"> 

      <title> Animal Assisted Therapy Services MA </title>
      <h1> Animal Assisted Therapy Services <abbr> MA</abbr> </h1>
      <h2> 501c3 Nonprofit organization proudly serving Massachusetts </h2>
    </div>
  );
}

// function Halfimage() {
//   return (
//     <div className= "Half-image-container"> 
//       <img src = {halfImg} alt = "Half width" className= "Half-image" /> 
//     </div>
//   );
// }


export default App; 