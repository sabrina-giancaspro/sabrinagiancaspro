import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        gsap.set('.desktopListItem, .listItem, .logo', {
            autoAlpha: 0,
            y: -200,
        });
        gsap.to('.desktopListItem, .listItem, .logo', {
            autoAlpha: 1,
            y: 0,
            duration: 2,
            ease: 'elastic',
            stagger: 0.1,
        });
    }, []);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="desktopListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-200} duration={500} className="desktopListItem">Cosa Faccio</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopListItem">Progetti</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} duration={500} className="desktopListItem">Contattami</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <FontAwesomeIcon icon={faMessage} /> Contattami
            </button>
            <FontAwesomeIcon icon={faBars} className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-200} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Cosa Faccio</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Progetti</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contattami</Link>
            </div>
        </nav>
    );
};

export default Navbar;