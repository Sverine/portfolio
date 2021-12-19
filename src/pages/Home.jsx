import React, { useState } from 'react';
import Contact from '../components/Contact';

import Cv from '../components/Cv';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Title from '../components/Title';

import '../styles/pages/home.scss';


const Home = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [color, setColor]= useState("#333333");

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


    return (
        <div className='home' 
            style={{backgroundColor:darkMode?"#191649":"white"}}>
            <div className='container'>
                <button onClick={handleClick}>Dark mode</button>
                <Navigation color={color}/>
                <Profile darkMode={darkMode} color={color}/>  
                <Title text="My projects" color={color}/>
                <Projects color={color}/>
                <Title text="About me" color={color}/>
                <Cv color={color}/>
                <Title text="Contact" color={color}/>
                <Contact color={color}/>
                <Footer color={color}/>
            </div>
        </div>
    );
};

export default Home;