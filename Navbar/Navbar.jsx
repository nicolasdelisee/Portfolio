import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import "./Navbar.css";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }
    
    useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const closeMenu = () => {
        setNavbarOpen(false); 
    }
    
    return (
            <nav className="navbar">
                <button onClick={handleToggle}>{navbarOpen ? <MdClose className="navbarOpen" /> : <FiMenu className="navbarClose"/>}</button>

                <ul className={breakpoint < width ? "menuNavDesktop" : (`menuNav ${navbarOpen ? "showMenu" : ""}`)}>
                    <li className="name_navbar"><strong className="maj_name_navbar">N</strong>icolas <strong className="maj_name_navbar">D</strong>elisée</li>
                    <NavLink to="/" className="navbar_hover" activeClassName="active-burger" onClick={closeMenu}><li>Accueil</li></NavLink>
                    <NavLink to="/parcours" className="navbar_hover" activeClassName="active-burger" onClick={closeMenu}><li>Mon parcours</li></NavLink>
                    <NavLink to="/projets" className="navbar_hover" activeClassName="active-burger" onClick={closeMenu}><li>Mes projets</li></NavLink>
                    <NavLink to="/contact" className="navbar_hover" activeClassName="active-burger" onClick={closeMenu}><li>Me contacter</li></NavLink>
                </ul>
            </nav>
    );
}

export default Navbar;
