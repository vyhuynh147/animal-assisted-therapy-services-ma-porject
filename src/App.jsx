
import "./App.css";
import logo from './logo.png';
import halfImg from "./halfimage.png";

// console.log(logo);

function App() {
  return (
    <div>
      <Imglogo />
      <Header />
      <Navbar />
      {/* <Halfimage /> */}

      {/* <img src = {logo} alt= " aasma Logo" /> */}
    </div>
  );
}


function Navbar () {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href = "/"> Home </a></li>
        <li><a href = "/about"> About Us </a></li>
        <li><a href = "/programs"> Programs </a></li>
        <li><a href = "/Contact"> Contact Us </a></li>
        <li><a href = "/Infor"> I</a></li>
      </ul>
    </nav>
  );
}
function Imglogo () {
  return (
    <div className="Logo">
      < img src = {logo} alt = "assma logo" className="Logo" />
    </div>
  ); 
}




function Header() {
  return (
    <div className= "Header"> 

    <Navbar />
      <title> Animal Assisted Therapy Services MA </title>
      <h1> Animal Assisted Therapy Services <abbr> MA</abbr> </h1>
      <h2> 501c3 Nonprofit organization proudly serving Massachusetts </h2>
    </div>
  );
}

function Halfimage() {
  return (
    <div className= "Half-image-container"> 
      <img src = {halfImg} alt = "Half width" className= "Half-image" /> 
    </div>
  );
}


export default App; 