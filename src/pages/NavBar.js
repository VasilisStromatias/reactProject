import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import {GiHamburgerMenu} from 'react-icons/gi';

function  NavBar() {

    const [toggle, setToggle]= useState (false);


return (
<>

<nav className ="nav nav-pills navbar-expand-md bg-dark 
 align-items-center justify-content-between">   

        <button className="btn btn-warning text-dark d-sm-none menu-toggle-btn m-2"
        onClick={()=> {
            setToggle(!toggle);
            }}>
            <GiHamburgerMenu/>
        </button>


<Link className="navbar-brand text-warning ml-5 company-name d-none d-sm-block" to="/">Upupa epops</Link>

    <div className={
        'mx-auto mx-sm-0 d-sm-block ' + 
        (toggle === false ? 'd-none ' : ' ')
    }>
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
