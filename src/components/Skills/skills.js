import React, { useEffect, useRef } from "react";
import './skills.css';
import FullStack from '../../assets/fullstack.png';
import FrontEnd from '../../assets/frontend.png';
import BackEnd from '../../assets/backend.png';
import Cursor from '../Cursor/cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef([]);

    useEffect(() => {
        skillsRef.current.forEach((el, index) => {
            gsap.fromTo(el,
                {
                    autoAlpha: 0,
                    y: 50
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%', // quando l'elemento è visibile all'80% della finestra di visualizzazione
                        toggleActions: 'play none none none'
                    }
                });
        });
    }, []);

    const skillsData = [
        {
            img: FrontEnd,
            title: "Front-End Web Development",
            desc: "Sono esperta di HTML, CSS e JavaScript, oltre ad avere una solida conoscenza dei framework come Vue.js e React.js per la creazione di interfacce utente dinamiche e reattive. Ho esperienza nell'utilizzo di librerie e strumenti come Sass, Bootstrap e Tailwind per migliorare l'efficienza nello sviluppo e garantire un design moderno e responsivo."
        },
        {
            img: BackEnd,
            title: "Back-End Web Development",
            desc: "Ho lavorato su progetti backend utilizzando il framework Laravel e il linguaggio PHP, ho competenze nella progettazione e gestione di database relazionali utilizzando MySQL, garantendo la sicurezza e l'efficienza nella gestione dei dati."
        },
        {
            img: FullStack,
            title: "Full-Stack Web Development",
            desc: "Sono in grado di creare applicazioni web complete gestendo sia il frontend che il backend, implementando comunicazioni tramite API RESTful per consentire un flusso di dati fluido tra le due parti."
        }
    ];

    return (
        <section id="skills">
            <Cursor />
            <span className="pageTitle introText">
                Le mie Skills
            </span>
            <span className="pageDesc introText">Durante le mie esperienze professionali, ho avuto l'opportunità di sviluppare sia siti web che applicazioni web, occupandomi sia del full stack che del solo front end. Le tecnologie che conosco e utilizzo sono elencate qui sotto.</span>
            {skillsData.map((skill, index) => (
                <div
                    className="skillBars"
                    key={index}
                    ref={el => skillsRef.current[index] = el}
                >
                    <div className="skillBar">
                        <img src={skill.img} alt={skill.title} className="skillBarImg" />
                        <div className="skillBarText">
                            <h2 className="introText">{skill.title}</h2>
                            <p>{skill.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Skills;
