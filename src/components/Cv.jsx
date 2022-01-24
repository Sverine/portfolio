import React,{ useEffect, useState } from 'react';
import Logo from './Logo';

import '../styles/components/_cv.scss';
import titleUnderline from '../assets/underline-title.svg';

const Cv = ({isEnglish, color, experiences,educations,skills}) => {

    const [active, setActive]= useState(false);

    const handleScroll=()=>{
        if (window.scrollY>3000){
            window.removeEventListener('scroll', handleScroll);
            setActive(true);
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    })


    return (
        <div className='cv'>
            <Logo color1={color} color2="#6862CA"/>
            <p style={{color:color}}>severine.sylvan@gmail.com</p>
            <p style={{color:color}}>Vic la gardiole</p>

            <div className="experiences">
                <div className="title">
                    <h3 style={{color:color}}>{isEnglish?"Experiences":"Expériences"}</h3>
                    <figure>
                        <img src={titleUnderline} alt="underline title"/>
                    </figure>

                </div>

                <ul>
                    {experiences.map((experience)=>(
                        <li style={{color:color}} key={experience.id}>
                            <p className='job'>{experience.job}</p>
                            <p className='entreprise'>{experience.entreprise}</p>
                            <p className='content'>{experience.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="educations">
                <div className="title">
                    <h3 style={{color:color}}>{isEnglish?"Educational background":"Formations"}</h3>
                    <figure>
                        <img src={titleUnderline} alt="underline title"/>
                    </figure>

                </div>
                <ul>
                    {educations.map((education)=>(
                        <li style={{color:color}} key={education.id}>
                            <p className='diploma'>{education.diploma}</p>
                            <p className='year'>{education.year}</p>
                            <p className='school'>{education.school}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills">
                <div className="title">
                    <h3 style={{color:color}}>{isEnglish?"Skills":"Compétences"}</h3>
                    <figure>
                        <img src={titleUnderline} alt="underline title"/>
                    </figure>
                </div>
                
                <ul>
                    {skills.map((skill)=>(
                        <li className='skill-list' style={{color:color}} key={skill.id}>
                            <p className='skill'>{skill.name}</p>
                            <div className="progress" 
                            style={{backgroundColor:color==="white"?"rgba(255, 255, 255, 0.20)":"rgba(0, 0, 0, 0.10)"}}>
                                <div style={{width:!active?"0%":skill.level,
                                backgroundColor:!active?"#302A8B":"#8681D5",
                                transition:`${skill.transition} ease-in-out`}} 
                                className="progress-bar"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cv;