import logo from "./logo.png";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <nav className = "Navbar"> 
            <div className="nav_container">

                <div className="Logo">
                    <Link to= "/">
                        <img src = {logo} alt = "assma logo" className="Logo" />
                    </Link>
                </div>
        
                <ul className="nav_links">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to= "/aboutus"> About Us </Link></li>
                    <li><Link to= "/programs"> Programs </Link></li>
                    <li><Link to= "/contact"> Contact Us </Link></li>
                </ul>

            </div>
        </nav>
    );
}

