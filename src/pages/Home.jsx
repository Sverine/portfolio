import React, { useState } from 'react';

import Contact from '../components/Contact';
import Cv from '../components/Cv';
import Footer from '../components/Footer';
import Moon from '../components/Moon';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Title from '../components/Title';

import '../styles/pages/home.scss';
import HOMEPAGE_DATA from '../assets/homepage.data';


const Home = () => {

    
    const [darkMode, setDarkMode] = useState(false);
    const [color, setColor]= useState("#333333");
    const [language, setLanguage] = useState(0);

    const {navigation, profile, projects, experiences,educations,contact, footer}= HOMEPAGE_DATA[language];
    const skills= HOMEPAGE_DATA[2].skills;


    const handleClick=()=>{
        if(darkMode){
            setDarkMode(false);
            setColor("#333333");
        }
        else {
            setDarkMode(true);
            setColor("white");
        };
    }

    const handleClickLanguage = (e)=>{
        e.target.className==="fr"?(setLanguage(0)):(setLanguage(1));
    }
    





    return (
        <div className='home' 
            style={{backgroundColor:darkMode?"#191649":"white"}}>
            <div className='container'>

                {/* NAVIGATION */}
                <div className='navigation'>
                    <Navigation color={color} content={navigation}/>
                    <div className='language' style={{fontWeight:"300", color:color==="#333333"?color:"white"}}>
                        <span className='fr' onClick={handleClickLanguage}
                        style={{color:language===0?"#8681D5":color}}>FR</span>
                        <span> | </span>
                        <span className='en' onClick={handleClickLanguage}
                        style={{color:language===1?"#8681D5":color}}>EN</span>
                    </div>
                    <div onClick={handleClick}>
                        <Moon color={color}/>
                    </div>
                </div>

                {/* PROFILE */}
                <Profile darkMode={darkMode} color={color} content={profile}/>  

                {/* PROJECTS */}
                <Title text={navigation.projects} color={color}/>
                <Projects color={color} content={projects}/>

                {/* CV */}
                <Title text={navigation.aboutMe} color={color}/>
                <Cv color={color} experiences={experiences} educations={educations} skills={skills}/>

                {/* CONTACT */}
                <Title text={navigation.contact} color={color}/>
                <Contact color={color} content={contact}/>


                <Footer color={color} content={footer}/>
            </div>
        </div>
    );
};

export default Home;