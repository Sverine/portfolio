import React from 'react';
import Logo from './Logo';
import Github from './Svg-components/Github';
import Linkedin from './Svg-components/Linkedin';
import Twitter from './Svg-components/Twitter';

const Footer = ({color, content}) => {

    return (
        <div className='footer' style={{marginBottom:"50px"}}>
            <h3 style={{color:color, fontWeight:"300",fontSize:"14px"}}>{content.thank}</h3>
            <div style={{maxWidth:"235px", margin:"0 auto"}}>
                <Logo color1={color} color2="#6862CA"/>
                <div className="socials" style={{marginTop:"20px", display:"flex",justifyContent:'space-evenly'}}>
                    <a href="https://github.com/Sverine" target="_blank" rel="noreferrer"> 
                        <Github color={color}/>
                    </a>
                    <a href="https://www.linkedin.com/in/severine-sylvan/" target="_blank" rel="noreferrer"> 
                        <Linkedin color={color}/>
                    </a>
                    <a href="https://twitter.com/sverinee" target="_blank" rel="noreferrer"> 
                        <Twitter color={color}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;