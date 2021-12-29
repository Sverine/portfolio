import React from 'react';
import { NavLink } from 'react-router-dom';

import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

import '../styles/components/_footer-page.scss';

const FooterPages = ({leftLink, rightLink}) => {
    return (
        <section className='footer-pages'>
            <NavLink to={`/${leftLink}`}>
                <figure>
                    <img src={leftArrow} alt="projet précédent"/>
                </figure>
            </NavLink>

            <NavLink className='button' to="/">
                <button>Retour</button>
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