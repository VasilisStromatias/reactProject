import React from 'react';
import {Link} from "react-router-dom";
import '../css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';

function  NavBar() {
return (
<>

<nav className ="nav nav-pills navbar-expand-md bg-dark 
 align-items-center justify-content-between sticky-top">   

 <Link className="navbar-brand text-warning ml-5 company-name" to="/">Upupa epops</Link>

<div>
    <ul className = "list-items navbar-nav bg-dark text-center" >    
        <li><Link className="nav-link text-warning mr-4" to="/">Home</Link></li>
        <li><Link className="nav-link text-warning mr-4" to="/signature-cocktail">Signature Cocktail</Link></li>
        <li><Link className="nav-link text-warning mr-4" to="/food-menu">Food Menu</Link></li>
        <li><Link className="nav-link text-warning mr-4" to="/contact">Contact Us</Link></li>
        <li><Link className="nav-link text-warning mr-4" to="/test">TestPage</Link></li>
    </ul> 
</div>   

</nav>
</>
);
}

export default NavBar;
