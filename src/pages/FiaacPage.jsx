import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';

import '../styles/pages/fiaac.scss';

import logo from '../assets/pages/fiaac/fiaac-logo.png';
import header from '../assets/pages/fiaac/header-fiaac.png';

//LOGOS
import logo2 from '../assets/pages/fiaac/fiaac-logo2.png';
import logo3 from '../assets/pages/fiaac/fiaac-logo3.png';
import logo4 from '../assets/pages/fiaac/fiaac-logo4.png';

//COLORS
import colors1 from '../assets/pages/fiaac/colors-1.png';
import colors2 from '../assets/pages/fiaac/colors-2.png';
import colors3 from '../assets/pages/fiaac/colors-3.png';

import draft from '../assets/pages/fiaac/draft.png';
import posters from '../assets/pages/fiaac/posters.png';
import facebook from '../assets/pages/fiaac/facebook-page.png';
import FooterPages from '../components/FooterPages';

const FiaacPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='fiaac'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure><img src={header} alt="Header"/></figure>
                    <figure><img src={logo} alt="logo FIAAC"/></figure>
                </header>

                <section className="intro column">
                    <p>La FIAAC (festival international d’art actuel dans les chais ) est une rencontre entre artistes et vignerons dans la commune de Pouilly sur Loire située dans le département de la Nièvre en région Bourgogne-Franche-Comté.<br/>
                    A deux heures de Paris en train, le festival attire chaque année un certain nombre de visiteurs et de collectionneurs.</p>
                    <p>Dans l’objectif d’améliorer leur communication lors d’un projet d’école, nous avons formé une équipe composée d’élèves en marketing et en communication.</p>
                </section>

                <section className="identity column">
                    <Title text="charte graphique" color="333333" underLines="B1CB96"/>
                    <h3>Logos</h3>
                    <figure><img src={logo2} alt="Propositon Logo" /></figure>
                    <div className="logos-container">
                        <figure><img src={logo3} alt="Propositon Logo" /></figure>
                        <figure><img src={logo4} alt="Propositon Logo" /></figure>
                    </div>
                    <h3>Couleurs</h3>
                    <div className="colors-container">
                        <figure><img src={colors1} alt="Couleur suggérée" /></figure>
                        <figure><img src={colors2} alt="Couleur suggérée" /></figure>
                        <figure><img src={colors3} alt="Couleur suggérée" /></figure>
                    </div>
                    <h3>Drafts</h3>
                    <figure className='draft'><img src={draft} alt="Dessin à main levée" /></figure>
                </section>

                <section className='posters column'>
                    <Title text="posters" color="333333" underLines="B1CB96"/>
                    <figure><img src={posters} alt="Affiches du festival" /></figure>
                </section>

                <section className='facebook column'>
                    <Title text="page facebook" color="333333" underLines="B1CB96"/>
                    <figure><img src={facebook} alt="Page Facebook du festival" /></figure>
                </section>

                <FooterPages leftLink="le-boncoin" rightLink=""/>

            </div>
        </div>
    );
};

export default FiaacPage;