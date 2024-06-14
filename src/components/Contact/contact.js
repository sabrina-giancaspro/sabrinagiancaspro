import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import Cursor from '../Cursor/cursor';

const Contact = () => {
    return (
        <section id="contact">
            <Cursor />
            <h1 className="pageTitle introText">Contattami</h1>
            <div className="links">
                <a href="https://www.linkedin.com/in/sabrina-giancaspro-a897862b0" target="_blank" rel="noopener noreferrer" className="link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/sabrina-giancaspro" target="_blank" rel="noopener noreferrer" className="link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://web.whatsapp.com/send?phone=+4917682318217" target="_blank" rel="noopener noreferrer" className="link">
                    <FontAwesomeIcon icon={faSquarePhone} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabrina.giancaspro13@gmail.com" target="_blank" rel="noopener noreferrer" className="link">
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                </a>
            </div>
        </section >
    )
}

export default Contact;