import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/_projects.scss';
import Isotope from 'isotope-layout';

import faventine from '../assets/projects-img/faventine-joaillerie-item-img.jpeg';
import zerosix from '../assets/projects-img/zerosix-item-img.jpeg';
import etapesPrint from '../assets/projects-img/etapes-print-item-img.jpeg';
import laposte from '../assets/projects-img/courrier-plus-item-img.jpeg';
import eggShot from '../assets/projects-img/egg-shot-item-img.jpeg';
import leBonCoin from '../assets/projects-img/leboncoin-item-img.jpeg';
import fiaac from '../assets/projects-img/fiaac-item-img.jpeg';
import muchosTacos from '../assets/projects-img/muchos-tacos-item-img.jpeg';
import laReserveDeLaChapelle from '../assets/projects-img/la-reserve-de-la-chapelle-item-img.jpg';

const Projects = ({color,content}) => {

    const themes = content.projects;

    // init one ref to store the future isotope object
    const isotope = useRef();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*");

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-items", {
            itemSelector: ".item",
            layoutMode: 'masonry',
            masonry: {
                fitWidth: true
            }
    });
    // cleanup
    return () => isotope.current?.destroy();
    }, []);

    // handling filter key change
    useEffect(() => {
        if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key,e) => function(e) {
        setFilterKey(key);
        let selectedItem = e.target;
        let tests = document.getElementsByClassName("active");
        for(let test of tests){
            test.classList.remove("active")
        }
        selectedItem.classList.add("active");
        //console.log(e.target.textContent)
    } 

    return (
        <div className='projects'>
            <ul className='portfolio-menu'>
                
                <li className="active" style={{color:color}} onClick={handleFilterKeyChange("*")}>tout</li>
                {themes.map((theme)=>(
                    <li 
                    style={{color:color}}
                    key={theme} onClick={handleFilterKeyChange(theme)}>{theme==="uxui"?"UX/UI":theme}</li>

                ))}
            </ul>
            <div className="portfolio-items">
                
                <div className={`item ${themes[0]} ${themes[1]}`}>
                <NavLink to="/faventine-joaillerie">
                        <figure>
                            <img src={faventine} alt="Miniature Faventine Joaillerie"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]} ${themes[1]} ${themes[2]} ${themes[3]}`}>
                <NavLink to="/zerosix">
                        <figure>
                            <img src={zerosix} alt="Miniature ZEROSIX"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]} ${themes[1]}`}>
                    <NavLink to="/la-reserve-de-la-chapelle">
                        <figure>
                            <img src={laReserveDeLaChapelle} alt="Miniature La Réserve de la Chapelle"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[2]}`}>
                    <NavLink to="/etapes-print">
                        <figure>
                            <img src={etapesPrint} alt="Miniature Etapes Print"/>
                        </figure>
                    </NavLink>
                </div>
                <div className={`item ${themes[0]}`}>
                    <NavLink to="/courrier-plus">
                        <figure>
                            <img src={laposte} alt="Miniature La Poste"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]} ${themes[2]}`}>
                    <NavLink to="/eggshot">
                        <figure>
                            <img src={eggShot} alt="Miniature EggShot"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]}`}>
                    <NavLink to="/le-boncoin">
                        <figure>
                            <img src={leBonCoin} alt="Miniature Leboncoin"/>
                        </figure>
                    </NavLink>
                </div>
                <div className={`item ${themes[2]}`}>
                    <NavLink to="/fiaac">
                        <figure>
                            <img src={fiaac} alt="Miniature FIAAC"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]} ${themes[1]} ${themes[2]} ${themes[3]}`}>
                    <NavLink to="/muchos-tacos">
                        <figure>
                            <img src={muchosTacos} alt="Miniature Muchos Tacos"/>
                        </figure>
                    </NavLink>
                </div>

            </div>
            <h3 style={{color:color}}>{content.more}</h3>
        </div>
    );
};

export default Projects;