import React from 'react';
import { NavLink } from 'react-router-dom';

import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

const FooterPages = ({leftLink, rightLink}) => {
    return (
        <section className='footer-pages' style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"100%", margin:"20px 0 50px"}}>
            <NavLink to={`/${leftLink}`}>
                <figure>
                    <img src={leftArrow} alt="projet précédent"/>
                </figure>
            </NavLink>

            <NavLink to="/" style={{minWidth:"120px", display:"flex", justifyContent:"center"}}>
                <button style={{backgroundColor:"#302A8B", width:"100%", marginTop:"0"}}>Retour</button>
            </NavLink>

            <NavLink to={`/${rightLink }`}>
                <figure>
                    <img src={rightArrow} alt="projet suivant"/>
                </figure>
            </NavLink>

        </section>
    );
};

export default FooterPages;