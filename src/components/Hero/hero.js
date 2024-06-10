import React, { useEffect, useRef } from 'react';
import './hero.css';
import bg from '../../assets/firstimg.png';
import cv from '../../assets/cv.pdf';
import Cursor from '../Cursor/cursor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faCakeCandles, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const Hero = () => {
    const introTextRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Funzione per calcolare la percentuale di avanzamento dello scrolling
        const getScrollPercent = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
        };

        gsap.to('body', {
            backgroundColor: '#0F0F14',
            duration: 20,
            delay: 3,
            ease: 'none',
            scrollTrigger: {
                start: 'top left',
                end: 'bottom right',
                scrub: true,
                onUpdate: () => {
                    // Calcola la percentuale di avanzamento dello scrolling
                    const scrollPercent = getScrollPercent();
                    // Calcola il colore intermedio in base alla percentuale di avanzamento
                    const r = Math.round(15 + (40 - 15) * (scrollPercent / 100));
                    const g = Math.round(15 + (40 - 15) * (scrollPercent / 100));
                    const b = Math.round(20 + (80 - 20) * (scrollPercent / 100));
                    const color = `rgb(${r},${g},${b})`;
                    document.body.style.backgroundColor = color;
                },
            },
        });

        gsap.fromTo(
            introTextRef.current,
            {
                autoAlpha: 0,
                x: '-100vw',
            },
            {
                autoAlpha: 1,
                x: 0,
                delay: 0.3,
                duration: 2,
                ease: 'bounce.out',
            }
        );
    }, []);

    return (
        <section id='hero'>
            <Cursor />
            <div className='infoSection' >
                <ul className='info'>
                    <li className='introText'><FontAwesomeIcon className='infoIcon' icon={faUser} />Sabrina Giancaspro</li>
                    <li className='introText'><FontAwesomeIcon className='infoIcon' icon={faMapMarkerAlt} />Genova, Italia</li>
                </ul>
                <ul className='info'>
                    <li className='introText'><FontAwesomeIcon className='infoIcon' icon={faCakeCandles} />11.07.2000</li>
                    <li className='introText'><FontAwesomeIcon className='infoIcon' icon={faEnvelope} />sabrina.giancaspro13@gmail.com</li>
                </ul>
            </div>
            <div className='heroContent'>
                <span className='ciao'>Ciao,</span>
                <span ref={introTextRef} className="introText">Sono <span className="introName">Sabrina</span><br />Full-stack Web Developer</span>
                <p className="introPara">Ho recentemente completato un intenso <span className='fontBold'>bootcamp di 6 mesi presso Boolean</span>, specializzandomi sia nel <span className='fontBold'>Front-End</span> che nel <span className='fontBold'>Back-End</span> dello sviluppo web.
                    <br />L'opportunità di trasformare idee in realtà attraverso il coding è ciò che mi motiva e mi ispira ogni giorno.
                    <br /> <span>Il mio viaggio nel mondo dello sviluppo web è iniziato come un interesse e si è rapidamente trasformato in una passione.
                        <br /> Nel mio portfolio, troverai una raccolta dei miei progetti più recenti e significativi.
                        <br /><span className='fontBold'>Grazie</span> per aver aperto il mio portfolio e non vedo l'ora di connetterci!</span>
                </p>
                <a href={cv} download><button className='desktopMenuBtn'><FontAwesomeIcon icon={faFile} />Scarica CV</button></a>
            </div>
            <img src={bg} alt="profile" className='bg' />
        </section>
    )
}

export default Hero;
