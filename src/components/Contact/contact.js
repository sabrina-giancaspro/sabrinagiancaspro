import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import Cursor from '../Cursor/cursor';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hb9j7rs', 'template_ie5uaeb', form.current, {
                publicKey: 'ETQGHKXGPx9JlVTxD',
            })
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            },
            );
    };
    return (
        <section id="contact">
            <Cursor />
            <h1 className="pageTitle introText">Contattami</h1>
            <span className="contactDesc introText">Per mandarmi una Mail compila il Form!</span>
            <form ref={form} className="contactFrom" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Il tuo nome" name='your_name' />
                <input type="email" className="email" placeholder="la tua email" name='your_email' />
                <textarea name="message" rows="5" placeholder="il tuo messaggio" className="msg"></textarea>
                <div className="links">
                    <a href="https://www.linkedin.com/in/sabrina-giancaspro-a897862b0" target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/sabrina-giancaspro" target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://web.whatsapp.com/send?phone=+4917682318217"  target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faSquarePhone} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabrina.giancaspro13@gmail.com" target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faSquareEnvelope} />
                    </a>
                </div>

                <input type="submit" value="Invia" className="submitBtn" />

            </form>
        </section>
    )
}

export default Contact;