import React, { useEffect, useRef } from 'react';

import '../styles/components/_projects.scss';
import Isotope from 'isotope-layout';
import { useState } from 'react/cjs/react.development';

const Projects = ({color}) => {

    const themes = ["uxui","développement","illustration","motion"];

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
                
                <div className="item uxui développement">
                    <a href="">
                        <figure>
                            <img src="./img/faventine-joaillerie-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item uxui développement illustration motion">
                    <a href="">
                        <figure>
                            <img src="./img/zerosix-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item illustration">
                    <a href="">
                        <figure>
                            <img src="./img/etapes-print-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>
                <div className="item uxui">
                    <a href="">
                        <figure>
                            <img src="./img/courrier-plus-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item uxui illustration">
                    <a href="">
                        <figure>
                            <img src="./img/egg-shot-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item uxui">
                    <a href="">
                        <figure>
                            <img src="./img/leboncoin-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>
                <div className="item illustration">
                    <a href="">
                        <figure>
                            <img src="./img/fiaac-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item uxui développement motion illustration">
                    <a href="">
                        <figure>
                            <img src="./img/muchos-tacos-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

                <div className="item illustration">
                    <a href="">
                        <figure>
                            <img src="./img/la-grande-vache-item-img.jpeg" alt=""/>
                        </figure>
                    </a>
                </div>

            </div>
            <h3 style={{color:color}}>and much more ...</h3>
        </div>
    );
};

export default Projects;