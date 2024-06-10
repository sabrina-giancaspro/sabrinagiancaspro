import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import Cursor from '../Cursor/cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from '../Modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectRefs = useRef([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    useEffect(() => {
        projectRefs.current.forEach((el, index) => {
            gsap.fromTo(el,
                {
                    autoAlpha: 0,
                    x: index % 2 === 0 ? -100 : 100, // Alterna la direzione di ingresso
                },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                });
        });
    }, []);

    const projectsData = [
        {
            name: "Cani Felici",
            description: "Uno dei miei progetti preferiti, dove ho unito due delle mie più grandi passioni: lo sviluppo web e i cani. Si tratta di un sito che mira a fornire informazioni preziose sulla cura dei cani e a promuovere un'adozione responsabile.",
            tech: "Laravel, Database Mysql, Vue.js, Bootstrap",
            image: require('../../assets/cani.png'),
            video: 'cani.mp4'
        },
        {
            name: "Berlin Fliesenleger",
            description: "Ho avuto il piacere di sviluppare questo sito vetrina per l'azienda di famiglia di mio padre. Durante il processo creativo, ho deciso di sperimentare e aggiungere un tocco di magia utilizzando GSAP.",
            tech: "Vue.js, Bootstrap",
            image: require('../../assets/website.png'),
            video: 'fliesen.mp4'
        },
        {
            name: "Spotify",
            description: "Uno dei miei primi progetti con JavaScript vanilla, realizzato nei primi mesi del corso. Nonostante la sua semplicità, è un progetto che mi è rimasto particolarmente a cuore. Amo ascoltare musica, quindi ho deciso di personalizzare questo progetto aggiungendo la funzionalità di riproduzione e pausa della canzone. È stata un'esperienza gratificante unire la mia passione per lo sviluppo web al mio piacere nell'ascoltare musica in questo progetto.",
            tech: "HTML, CSS, JavaScript",
            image: require('../../assets/spotify.png'),
            video: 'spotify.mp4'
        },
    ];

    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo('');
    };

    return (
        <section id="projects">
            <Cursor />
            <h2 className="pageTitle introText">I miei Progetti</h2>
            {projectsData.map((project, index) => (
                <div
                    className="project"
                    key={index}
                    ref={el => projectRefs.current[index] = el}
                >
                    
                    <div className="projectFlex">
                        <div className="projectImgContainer" onClick={() => openModal(project.video)}>
                            <img src={project.image} alt={project.name} className="projectImg" />
                            <div className="projectImgOverlay">
                                <FontAwesomeIcon className='playIcon' icon={faCirclePlay} />
                            </div>
                        </div>
                        <div className="projectInfo">
                            <h3 className="projectTitle introText">{project.name}</h3>
                            <p className="pageDesc">{project.description}</p>
                            <p className="tech">{project.tech}</p>
                            {/* <button className="submitBtn">Dettagli</button> */}
                        </div>
                    </div>
                </div>
            ))}
            {isModalOpen && <Modal videoUrl={selectedVideo} closeModal={closeModal} />}
        </section>
    )
}

export default Projects;
