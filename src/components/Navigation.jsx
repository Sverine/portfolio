import React from 'react';
import Logo from './Logo';

import '../styles/settings.scss';
import '../styles/components/_navigation.scss';

const Navigation = ({color}) => {
    return (
        <div className='navigation'>
            <Logo color1={color} color2="#6862CA"/>
            <ul style={{color:color}}>
                <li>Accueil</li>
                <li>My projects</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navigation;