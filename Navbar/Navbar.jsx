import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import "./Navbar.css";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }
    
    const closeMenu = () => {
        setNavbarOpen(false); 
    }
    
    return (
            <nav className="navbar">
                <button onClick={handleToggle}>{navbarOpen ? <MdClose className="navbarOpen" /> : <FiMenu className="navbarClose"/>}</button>

                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li className="name_navbar"><strong className="maj_name_navbar">N</strong>icolas <strong className="maj_name_navbar">D</strong>elisée</li>
                    <NavLink to="/home" activeClassName="active-burger" onClick={closeMenu}><li>Accueil</li></NavLink>
                    <NavLink to="/parcours" activeClassName="active-burger" onClick={closeMenu}><li>Mon parcours</li></NavLink>
                    <NavLink to="/projets" activeClassName="active-burger" onClick={closeMenu}><li>Mes projets</li></NavLink>
                    <NavLink to="/contact" activeClassName="active-burger" onClick={closeMenu}><li>Me contacter</li></NavLink>
                </ul> 
            </nav>
    );
}

export default Navbar;
