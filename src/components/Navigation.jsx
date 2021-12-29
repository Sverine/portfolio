import React, { useEffect, useState } from 'react';
import Logo from './Logo';

import '../styles/components/_navigation.scss';


const Navigation = ({color, content}) => {


    const [scrollTo, setScrollTo ] = useState(0);

    const handleClick = (e)=>{ 
        
        switch(e.target.className){
            
            case 'projects-list':
                setScrollTo(document.querySelector(".projects").offsetTop-80);
                break;

            case 'about-list':
            setScrollTo(document.querySelector(".cv").offsetTop-80);
            break;

            case 'contact-list':
                setScrollTo(document.querySelector(".contact").offsetTop-80);
                break;

            default:
                setScrollTo(0);
                break;
        }
    }

    useEffect(()=>{
        window.scrollBy({
            top: scrollTo,
            left: 0,
            behavior: 'smooth'
        });
    },[scrollTo])

    return (
        <nav className='navigation-list'>
            <Logo color1={color} color2="#6862CA"/>
            <ul style={{color:color}}>
                <li className='projects-list' onClick={handleClick}>{content.projects}</li>
                <li onClick={handleClick} className='about-list'>{content.aboutMe}</li>
                <li onClick={handleClick} className='contact-list'>{content.contact}</li>
            </ul>
        </nav>
    );
};

export default Navigation;