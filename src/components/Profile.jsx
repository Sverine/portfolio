import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import '../styles/components/_profile.scss';

import profile from '../assets/profil-picture.png';

const Profile = ({darkMode, color, content}) => {

        //TYPED JS CONFIGURATION
        const el = useRef(null);
        const typed = useRef(null);
        const options = {
            strings: [
            content.jobs[0],
            content.jobs[1]
            ],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            loopCount: Infinity,
        };



    const handleClick = ()=>{
        let projectsHeight= document.querySelector(".projects").offsetTop;
        window.scrollBy({
            top: projectsHeight,
            left: 0,
            behavior: 'smooth'
        });
    }


    useEffect(() => {
        typed.current = new Typed(el.current, options);
        
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    })
    
    return (
        <div className='profile'> 
            <h1 style={{color:color}}>{content.h1} <br /> 
                <span ref={el} style={{color:darkMode?"#8681D5":"#302A8B"}}/>
            </h1>
            <figure className='profile-container'>
                <img src={profile} alt="profil"/>
            </figure>
            <div style={{color:color}}>
                <p>{content.firstIntro}</p>
                <p>{content.secondIntro}</p>
                <p>{content.thirdIntro}</p>
            </div>

            <div className="button-container" onClick={handleClick}>
                <p style={{color:darkMode?"#8681D5":"#302A8B"}} className='my-projects'>{content.button}</p>
                <figure className='arrow-animation'>
                    <svg width="30" height="38" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        style={{stroke:darkMode?"#8681D5":"#302A8B", strokeWidth:"2", strokeLinecap:"round"}}
                        d="M8.66667 1C8.66667 7.66874 8.86958 1.812 8.66662 8.4785C8.59167 10.9403 8.44421 13.3987 8.62495 15.8576"/>
                        <path 
                        style={{stroke:darkMode?"#8681D5":"#302A8B", strokeWidth:"2", strokeLinecap:"round"}}
                        d="M15.375 15.947C13.8548 17.6084 12.5708 19.3683 11 21.0089C10.3063 21.7335 9.51507 22.3917 8.79167 23.0973C8.71167 23.1754 8.4849 23.5704 8.29167 23.5797C7.97635 23.5947 7.72678 23.2582 7.60417 23.1073C7.02427 22.3936 6.45868 21.6801 5.84722 20.9791C4.57184 19.5169 3.29802 18.0448 1.79861 16.6929C1.55501 16.4732 1.12894 16.224 1 15.947"/>
                    </svg>
                </figure>
            </div>
        </div>
    );
};

export default Profile;