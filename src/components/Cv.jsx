import React from 'react';
import Logo from './Logo';

import '../styles/components/_cv.scss';
import titleUnderline from '../assets/underline-title.svg';
import Skill from './Skill';

const Cv = ({isEnglish, color, experiences,educations,skills}) => {



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

                <ul className='skills'>
                    {
                    skills.map((skill, index)=>(
                        <Skill key={index} skill={skill} color={color}/>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cv;