import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';
import SlotAnimation from '../components/SlotAnimation';

import '../styles/pages/muchos-tacos.scss';

//HEADER
import header from '../assets/pages/muchos-tacos/muchos-tacos_header.svg';
import logo from '../assets/pages/muchos-tacos/muchos-tacos_logo.png';

//IDENTITY
import minLogo from '../assets/pages/muchos-tacos/muchos-tacos_min-logo.png';
import colors from '../assets/pages/muchos-tacos/muchos-tacos_colors.png';
import typos from '../assets/pages/muchos-tacos/muchos-tacos_typos.png';
import picto1 from '../assets/pages/muchos-tacos/muchos-tacos_picto1.png';
import picto2 from '../assets/pages/muchos-tacos/muchos-tacos_picto2.png';
import picto3 from '../assets/pages/muchos-tacos/muchos-tacos_picto3.png';

//INTERFACE
import tortillaUnder from '../assets/pages/muchos-tacos/tortilla-under.png';
import tortillaOver from '../assets/pages/muchos-tacos/tortilla-over.png';
import interfaceMT from '../assets/pages/muchos-tacos/muchos-tacos_interface.jpg';
import browser from '../assets/pages/zerosix/browser-mockup.png';

//BOARDS
import board1 from '../assets/pages/muchos-tacos/board1.jpg';
import board2 from '../assets/pages/muchos-tacos/board2.jpg';
import board3 from '../assets/pages/muchos-tacos/board3.jpg';
import board4 from '../assets/pages/muchos-tacos/board4.jpg';
import board5 from '../assets/pages/muchos-tacos/board5.jpg';
import board6 from '../assets/pages/muchos-tacos/board6.jpg';
import board7 from '../assets/pages/muchos-tacos/board7.jpg';
import board8 from '../assets/pages/muchos-tacos/board8.jpg';
import FooterPages from '../components/FooterPages';

const MuchosTacosPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='muchos-tacos'>
            <div className="container isPage">
                <header style={{backgroundImage:`url(${header})`}}>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure><img src={logo} alt="Logo"/></figure>
                </header>

                <section className="intro column">
                    <p>Muchos Tacos est un projet de création de marque de skateboard.</p>
                    <p>Cette idée est issue d’un voyage d’un an en Australie et constitue aujourd’hui un véritable challenge. 
Férue de sport, c’est en longeant toute la côte Est de ce vaste pays que j’ai découvert cette culture du skateboard.</p>
                    <p>Mélangé avec une dose d’humour et mon engouement pour la culture mexicaine, je souhaiterais créer Muchos Tacos, une marque de skateboards entièrement peints à la main et aux designs arbitraires.</p>
                    <svg width="249" height="7" viewBox="0 0 249 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.44294 6.6012C83.4429 7.11454 165.443 5.91454 247.443 3.00121C249.363 2.93121 249.373 -0.0687939 247.443 0.00120611C165.443 2.90787 83.4429 4.10787 1.44294 3.6012C1.24793 3.59522 1.05381 3.63006 0.873057 3.7035C0.692301 3.77693 0.528907 3.88734 0.393321 4.02763C0.257735 4.16793 0.152928 4.33501 0.0857039 4.51817C0.0184794 4.70132 -0.00969395 4.89651 0.00294026 5.0912C-0.00800749 5.28646 0.0212387 5.48189 0.0888167 5.66541C0.156395 5.84892 0.260859 6.01662 0.395824 6.15815C0.530788 6.29968 0.693381 6.41201 0.873485 6.48822C1.05359 6.56443 1.24739 6.60288 1.44294 6.6012Z" fill="#FFA401"/>
                    </svg>
                    <p>Pour imaginer un e-commerce innovant, j’ai souhaité intégrer une méthode de choix d’illustration aléatoire en utilisant une animation de type machine à sous faisant naître une association de 3 mots.</p>
                    <p>Ce “cadavre exquis” deviendra le futur thème de la planche du visiteur. Si celui-ci décide de l’acheter, il ne connaîtra pas à l’avance le résultat final et devra patienter jusqu’à réception du skateboard.</p>
                </section>

                <section className="identity column">
                    <Title text="charte graphique" color="333333" underLines="FFA401"/>
                        <h3>logo, couleurs et typographies</h3>

                        <div className="logo-container">
                            <figure><img src={logo} alt="Logo"/></figure>
                        </div>

                        <div className="colors-typos">
                            <figure><img src={minLogo} alt="Logo raccourci" /></figure>
                            <figure><img src={colors} alt="Couleurs utilisées" /></figure>
                            <figure><img src={typos} alt="Typographies utilisées" /></figure>
                        </div>

                        <h3>éléments visuels</h3>
                        <SlotAnimation/>
                        <div className="picto-container">
                            <figure><img src={picto1} alt="Picto utilisé" /></figure>
                            <figure><img src={picto2} alt="Picto utilisé" /></figure>
                            <figure><img src={picto3} alt="Picto utilisé" /></figure>
                        </div>
                </section>

                <section className="interface column">
                    <Title text="Maquette" color="333333" underLines="FFA401"/>
                    <div className="overlay">
                        <figure><img src={tortillaUnder} alt="Tortilla en dessous de la maquette" /></figure>
                        <figure><img src={tortillaOver} alt="Tortilla au dessus de la maquette" /></figure>
                    </div>
                    <div className="browser">
                        <figure>
                            <img src={browser} alt="Mockup d'un navigateur web"/>
                            <div className="content">
                                <figure>
                                    <img src={interfaceMT} alt="Capture du site vitrine" />
                                </figure>
                            </div>
                        </figure>
                    </div>
                </section>

                <section className="boards column">
                    <Title text="Planches" color="333333" underLines="FFA401"/>
                    <h3>Déjà réalisées</h3>
                    <div className="boards-container">
                        <figure><img src={board1} alt="Plusieurs planches de skate" /></figure>
                        <figure><img src={board2} alt="Planche Cactus" /></figure>
                        <figure><img src={board3} alt="Planche Australia" /></figure>
                        <figure><img src={board4} alt="Planche Squatty Potty" /></figure>
                        <figure><img src={board5} alt="Planche Tacos" /></figure>
                        <figure><img src={board6} alt="Planche Tacos" /></figure>
                        <figure><img src={board7} alt="Planche Astronaute" /></figure>
                        <figure><img src={board8} alt="Planche Astronaute" /></figure>
                    </div>
                </section>

                <FooterPages leftLink="fiaac" rightLink="faventine-joaillerie"/>

            </div>
            
        </div>
    );
};

export default MuchosTacosPage;