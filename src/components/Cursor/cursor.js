import React, { useEffect, useRef } from 'react';
import './cursor.css';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);
    useEffect(() => {
        const cursor = cursorRef.current;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1
            });
        };

        const onMouseEnter = (e) => {
            if (e.target.classList.contains('introText') || e.target.classList.contains('introName') || e.target.classList.contains('ciao') || e.target.classList.contains('introPara')) {
                gsap.to(e.target, { color: 'rgb(238, 216, 78)', duration: 0.2 });
            }
        };

        const onMouseLeave = (e) => {
            if (e.target.classList.contains('introText') || e.target.classList.contains('introName') || e.target.classList.contains('ciao') || e.target.classList.contains('introPara')) {
                gsap.to(e.target, { color: '', duration: 0.2 });
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll('.introText, .introName, .ciao').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('.introText, .introName, .ciao, .introPara').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <section id='cursor'>
            <div ref={cursorRef} className='custom-cursor'></div>
        </section>
    )
}

export default Cursor;
