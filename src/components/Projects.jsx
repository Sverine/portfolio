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
import laGrandeVache from '../assets/projects-img/la-grande-vache-item-img.jpeg';

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
            layoutMode: "fitRows"
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
                <NavLink className={({isActive})=> isActive ? "nav-active":""} to="/faventine-joaillerie">
                        <figure>
                            <img src={faventine} alt="Miniature Faventine Joaillerie"/>
                        </figure>
                    </NavLink>
                </div>

                <div className={`item ${themes[0]} ${themes[1]} ${themes[2]} ${themes[3]}`}>
                    <a href="">
                        <figure>
                            <img src={zerosix} alt="Miniature ZEROSIX"/>
                        </figure>
                    </a>
                </div>

                <div className={`item ${themes[2]}`}>
                        <figure>
                            <img src={etapesPrint} alt="Miniature Etapes Print"/>
                        </figure>
                </div>
                <div className={`item ${themes[0]}`}>
                    <a href="">
                        <figure>
                            <img src={laposte} alt="Miniature La Poste"/>
                        </figure>
                    </a>
                </div>

                <div className={`item ${themes[0]} ${themes[2]}`}>
                    <a href="">
                        <figure>
                            <img src={eggShot} alt="Miniature EggShot"/>
                        </figure>
                    </a>
                </div>

                <div className={`item ${themes[0]}`}>
                    <a href="">
                        <figure>
                            <img src={leBonCoin} alt="Miniature Leboncoin"/>
                        </figure>
                    </a>
                </div>
                <div className={`item ${themes[2]}`}>
                    <a href="">
                        <figure>
                            <img src={fiaac} alt="Miniature FIAAC"/>
                        </figure>
                    </a>
                </div>

                <div className={`item ${themes[0]} ${themes[1]} ${themes[2]} ${themes[3]}`}>
                    <a href="">
                        <figure>
                            <img src={muchosTacos} alt="Miniature Muchos Tacos"/>
                        </figure>
                    </a>
                </div>

                <div className={`item ${themes[2]}`}>
                    <a href="">
                        <figure>
                            <img src={laGrandeVache} alt="Miniature La Grande Vache"/>
                        </figure>
                    </a>
                </div>

            </div>
            <h3 style={{color:color}}>{content.more}</h3>
        </div>
    );
};

export default Projects;