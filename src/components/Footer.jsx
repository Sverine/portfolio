import React from 'react';
import Logo from './Logo';

const Footer = ({color, content}) => {

    return (
        <div className='footer' style={{marginBottom:"50px"}}>
            <h3 style={{color:color, fontWeight:"300",fontSize:"14px"}}>{content.thank}</h3>
            <div style={{maxWidth:"235px", margin:"0 auto"}}>
                <Logo color1={color} color2="#6862CA"/>
            </div>
        </div>
    );
};

export default Footer;