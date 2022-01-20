import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';

import '../styles/pages/eggshot.scss';

import header from '../assets/pages/eggshot/eggshot_header.jpg';
//IDENTITY
import logoFinal from '../assets/pages/eggshot/eggshot_logo-final.png';
import logo1 from '../assets/pages/eggshot/eggshot_logo-1.png';
import logo2 from '../assets/pages/eggshot/eggshot_logo-2.png';
import colors from '../assets/pages/eggshot/eggshot_colors.png';
import typos from '../assets/pages/eggshot/eggshot_typos.png';

//VISUAL ELEMENTS
import loading from '../assets/pages/eggshot/eggshot_loading.gif';
import menu from '../assets/pages/eggshot/eggshot_menu.png';
import pictos from '../assets/pages/eggshot/eggshot_pictos.png';
import cursor from '../assets/pages/eggshot/eggshot_cursor.png';
import cursorLabel from '../assets/pages/eggshot/eggshot_cursor-label.png';
import visualItem1 from '../assets/pages/eggshot/eggshot_item-01.png';
import visualItem2 from '../assets/pages/eggshot/eggshot_item-02.png';
import visualItem3 from '../assets/pages/eggshot/eggshot_item-03.png';
import visualItem4 from '../assets/pages/eggshot/eggshot_item-04.png';

//INTERFACES
import interface1 from '../assets/pages/eggshot/eggshot_screens-01.jpg';
import interface2 from '../assets/pages/eggshot/eggshot_screens-02.jpg';
import interface3 from '../assets/pages/eggshot/eggshot_screens-03.jpg';
import interface4 from '../assets/pages/eggshot/eggshot_screens-04.jpg';
import interface5 from '../assets/pages/eggshot/eggshot_screens-05.jpg';
import interface6 from '../assets/pages/eggshot/eggshot_screens-06.jpg';
import interface7 from '../assets/pages/eggshot/eggshot_screens-07.jpg';
import interface8 from '../assets/pages/eggshot/eggshot_screens-08.jpg';
import FooterPages from '../components/FooterPages';


const EggshotPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='eggshot'>
            <div className="container isPage">

                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <img src={header} alt="Header EGGSHOT"/>
                </header>

                <section  className="intro column">
                    <p>EGGSHOT est un jeu issu d’un studio de jeux videos (ayant développé Shady Part of Me).<br/>
C’est un jeu d’action qui met en scène des poulets se battant sur un décor sauvage. </p>
                    <p>Le joueur incarne un poulet qu’il peut personnaliser au fur et à mesure de son évolution et doit affronter d’autres poulets qu’il rencontre sur son chemin.</p>
                    <p>En tant que graphiste et webdesigner, j’ai été en charge de la réalisation du logo ainsi que des visuels du site internet.</p>
                </section>

                <section className="identity column">
                    <Title text="chartre graphique" color="333333" underLines="FDB610"/>
                    <h3>logo, couleurs et typographies</h3>

                    <figure className='final-logo'><img src={logoFinal} alt="Logo final EGGSHOT" /></figure>
                    <p>Logo final</p>

                    <div className="research-logos">
                        <figure><img src={logo1} alt="Logo de recherche 1" /></figure>
                        <figure><img src={logo2} alt="Logo de recherche 2" /></figure>
                    </div>
                    <p>Logos de recherche</p>

                    <div className="colors-typos">
                        <figure><img src={colors} alt="Couleurs utilisées" /></figure>
                        <figure><img src={typos} alt="Typo utilisées" /></figure>
                    </div>

                    <h3>éléments visuels</h3>
                    <div className="visual-elements first-row">
                        <figure><img src={loading} alt="Visuel de chargement de la page" /></figure>
                        <figure><img src={menu} alt="Icon du menu du site" /></figure>
                    </div>
                    <div className="visual-elements-2">
                        <figure className="pictos"><img src={pictos} alt="Picto utilisés" /></figure>
                        <div className="cursor">
                            <figure ><img src={cursor} alt="Curseur" /></figure>
                            <figure ><img src={cursorLabel} alt="Indication du curseur" /></figure>
                        </div>
                    </div>
                    <div className="visual-elements-3 third-row">
                        <figure><img src={visualItem1} alt="Dessin d'une fougère" /></figure>
                        <figure><img src={visualItem2} alt="Dessin d'un poulet" /></figure>
                        <figure><img src={visualItem3} alt="Dessin d'un feu de camp" /></figure>
                        <figure><img src={visualItem4} alt="Dessin d'une fougère 2" /></figure>
                    </div>
                </section>

                <section className="interfaces column">
                    <Title text="maquettes" color="333333" underLines="FDB610"/>
                    <p>Site narratif qui raconte une histoire au scroll</p>
                    <div className="interfaces-container">
                        <figure><img src={interface1} alt="Maquette 1" /></figure>
                        <figure><img src={interface2} alt="Maquette 2" /></figure>
                        <figure><img src={interface3} alt="Maquette 3" /></figure>
                        <figure><img src={interface4} alt="Maquette 4" /></figure>
                        <figure>
                            <img src={interface5} alt="Maquette 5" />
                            <p>Page contact</p>
                        </figure>
                        <figure>
                            <img src={interface6} alt="Maquette 6" />
                            <p>Animation d’une boite d’oeuf au clic du menu</p>
                        </figure>
                        <figure>
                            <img src={interface7} alt="Maquette 7" />
                            <p>Twitter Wall</p>
                        </figure>
                        <figure>
                            <img src={interface8} alt="Maquette 8" />
                            <p>Page l'équipe</p>
                        </figure>
                    </div>
                </section>

                <FooterPages leftLink="courrier-plus" rightLink="le-boncoin"/>

            </div>
        </div>
    );
};

export default EggshotPage;