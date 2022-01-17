import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';
import FooterPages from '../components/FooterPages';

import '../styles/pages/zerosix.scss';

import header from '../assets/pages/zerosix/zerosix-header.png';

//PERSONAS
import clientPersona from '../assets/pages/zerosix/clients-personas.png';
import clientPersonaHover from '../assets/pages/zerosix/clients-personas-hover.png';
import managerPersona from '../assets/pages/zerosix/managers-personas.png';
import managerPersonaHover from '../assets/pages/zerosix/managers-personas-hover.png';
import sellerPersona from '../assets/pages/zerosix/sellers-personas.png';
import sellerPersonaHover from '../assets/pages/zerosix/sellers-personas-hover.png';


//IDENTITY
import logo from '../assets/pages/zerosix/zerosix-logo.png';
import colors from '../assets/pages/zerosix/zerosix-colors.svg';
import typos from '../assets/pages/zerosix/zerosix-typo.png';
import visualElem1 from '../assets/pages/zerosix/visual-elements-1.png';
import visualElem2 from '../assets/pages/zerosix/visual-elements-2.png';
import visualElem3 from '../assets/pages/zerosix/visual-elements-3.svg';
import visualElem4 from '../assets/pages/zerosix/visual-elements-4.png';
import visualElem5 from '../assets/pages/zerosix/visual-elements-5.png';
import icons1 from '../assets/pages/zerosix/icons-left.svg';
import icons2 from '../assets/pages/zerosix/icons-right.svg';
import tdbIcons1 from '../assets/pages/zerosix/tdb-icons-bottom.png';
import tdbIcons2 from '../assets/pages/zerosix/tdb-icons-top.png';

//SOCIALS
import twitter from '../assets/pages/zerosix/zerosix-twitter.jpeg';
import facebook1 from '../assets/pages/zerosix/zerosix-fb-1.jpeg';
import facebook2 from '../assets/pages/zerosix/zerosix-fb-2.jpeg';
import facebook3 from '../assets/pages/zerosix/zerosix-fb-3.jpeg';
import facebook4 from '../assets/pages/zerosix/zerosix-fb-4.jpeg';

//GIFS
import gif from '../assets/pages/zerosix/zerosix-gif-col.gif';
import gifBf from '../assets/pages/zerosix/zerosix-iphone-bf.gif';
import gifValentin from '../assets/pages/zerosix/zerosix-iphone-valentine.gif';

//UI INTERFACES
import browser from '../assets/pages/zerosix/browser-mockup.png';
import browserHeaderBar from '../assets/pages/zerosix/browser-mockup-header-bar.png';
import wireframe from '../assets/pages/zerosix/zerosix-homepage-wireframes.jpeg';
import scrollUnderlines from '../assets/pages/zerosix/scroll-underline.svg';
import iPad from '../assets/pages/zerosix/zerosix-ipad-page.png';




const ZerosixPage = () => {
    window.scrollTo({ top: 0 });
    
    const handleMouseEnter=(e)=>{
        let className = e.target.parentNode.parentNode.className;
        if (className==="persona-client" || className==="persona-manager" || className==="persona-seller"){
            let toDisplay = document.querySelector(`.${className}`);
            toDisplay.lastChild.style.display="block";
            toDisplay.lastChild.classList.add('fadeIn');
        }
    }
    const handleMouseLeave=(e)=>{
        let className = e.target.parentNode.parentNode.className;
        if (className==="persona-client" || className==="persona-manager" || className==="persona-seller"){
            let toHide = document.querySelector(`.${className}`);
            toHide.lastChild.style.display="none";
            toHide.lastChild.classList.remove('fadeIn');
        }
    }
    return (
        <div className='zerosix'>
            <div className="container isPage">

                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <img src={header} alt="Header ZEROSIX"/>
                </header>

                <section  className="intro column">
                    <p>ZEROSIX est une start-up montpelliéraine proposant la gestion d’un programme de fidélité aux commerçants (solution SAAS).</p>
                    <p>Au sein de l’entreprise, j’ai eu en charge la conception de maquettes d’interfaces (desktop et mobile) et l’intégration front des tableaux de bords à destination des clients. Afin d’améliorer l’expérience utilisateur des clients lors de la création de nouvelles offres, les maquettes, les personas, les retours clients, les phases de brainstorming et les tests en interne (recettes) ont été au coeur de mon travail.</p>
                </section>

                <section className="personas">
                    <Title text="Personas" color="333333" underLines="E74C3C"/>
                    <div className="items">
                        <div className="persona-client" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <figure>
                                <img src={clientPersona} alt="Persona client"/>
                            </figure>
                            <figure className='persona-client-hover'>
                                <img src={clientPersonaHover} alt="Visage du persona client au survol" />
                            </figure>
                        </div>

                        <div className="persona-manager" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <figure>
                                <img src={managerPersona} alt="Persona manager"/>
                            </figure>
                            <figure className='persona-manager-hover'>
                                <img src={managerPersonaHover} alt="Visage du persona manager au survol" />
                            </figure>
                        </div>
                        <div className="persona-seller" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <figure>
                                <img src={sellerPersona} alt="Persona vendeur"/>
                            </figure>
                            <figure className='persona-seller-hover'>
                                <img src={sellerPersonaHover} alt="Visage du persona vendeur au survol" />
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="identity column">
                    <Title text="Identité graphique" color="333333" underLines="E74C3C"/>

                    <h3>logo, couleurs et typographies</h3>
                    <div className="identity-img">
                        <figure>
                            <img src={logo} alt="Logo ZEROSX" />
                        </figure>
                        <figure>
                            <img src={colors} alt="Couleurs utilisées pour ZEROSIX" />
                        </figure>
                        <figure>
                            <img src={typos} alt="Typographies utilisées pour ZEROSIX" />
                        </figure>
                    </div>

                    <h3>Eléments visuels</h3>
                    <figure>
                        <img src={visualElem1} alt="Eléments visuels : Pattern pour arrière-plan" />
                    </figure>
                    <figure>
                        <img src={visualElem2} alt="Eléments visuels : Arrière-plan et bouton tchatbot" />
                    </figure>
                    <figure className='cta'>
                        <img src={visualElem3} alt="Eléments visuels : Bouton CTA" />
                    </figure>

                    <div className="animations">
                        <figure>
                            <img src={visualElem4} alt="Animation CSS" />
                        </figure>
                        <figure>
                            <img src={visualElem5} alt="Animation CSS" />
                        </figure>
                    </div>
                    <p>Animations CSS</p>

                    <h3>Icons</h3>
                    <div className="icons">
                        <figure>
                            <img src={icons1} alt="Icons utilisés" />
                        </figure>
                        <figure>
                            <img src={icons2} alt="Icons utilisés" />
                        </figure>
                    </div>
                    <p>Icons présents sur le site internet (vitrine)</p>

                    <div className="tdb-icons">
                        <figure>
                                <img src={tdbIcons1} alt="Icons utilisés sur le dashboard" />
                        </figure>
                        <figure>
                                <img src={tdbIcons2} alt="Icons utilisés sur le dashboard" />
                        </figure>
                    </div>
                    <p>Icons présents sur le tableau de bord</p>

                    <h3>supports de communication</h3>
                    <p className='subtitle'>Réseaux, articles, e-mails, promotions ...</p>
                    
                    <div className='socials'>
                        <figure>
                                <img src={twitter} alt="Bannière Twitter" />
                        </figure>
                        <p>Twitter</p>

                        <figure>
                                <img src={facebook1} alt="Bannière Facebook" />
                        </figure>
                        <div className="facebook-duo">
                            <figure>
                                    <img src={facebook2} alt="Bannière Facebook" />
                            </figure>
                            <figure>
                                    <img src={facebook3} alt="Bannière Facebook" />
                            </figure>
                        </div>
                        <figure>
                                <img src={facebook4} alt="Bannière Facebook" />
                        </figure>
                        <p>Facebook</p>
                    </div>

                    <figure className='gif'>
                            <img src={gif} alt="Vidéo promotionnelle d'un salon" />
                    </figure>
                    <p>Vidéo réalisée pour un salon evenementiel</p>

                    <div className="iphone-gif">
                        <figure>
                                <img src={gifBf} alt="Gif pour le black friday" />
                        </figure>
                        <figure>
                                <img src={gifValentin} alt="Gif pour la Saint Valentin" />
                        </figure>
                    </div>
                    <p>Animations évènementielles sur l’espace fidélité des clients</p>
                </section>

                <section className='interfaces column'>
                    <Title text="Intégration" color="333333" underLines="E74C3C"/>
                    <figure className='header-bar'>
                        <img src={browserHeaderBar} alt="Barre de navigation du navigateur" />
                    </figure>
                    <div className="browser">
                        <figure>
                            <img src={browser} alt="Mockup d'un navigateur web"/>
                            <div className="content">
                                <figure>
                                    <img src={wireframe} alt="Capture du site vitrine" />
                                </figure>
                            </div>
                        </figure>
                    </div>
                    <figure className='scroll-underlines'>
                        <img src={scrollUnderlines} alt="Barre de défilement" />
                    </figure>
                    <p>Page d'accueil du site vitrine</p>

                    <figure>
                        <img src={iPad} alt="Ecran d'inscription au programme de fidélité sur une borne iPad" />
                    </figure>
                    <p>Borne iPad située en boutique permettant l’inscription au programme de fidélité</p>

                </section>

                <FooterPages leftLink="faventine-joaillerie" rightLink="la-reserve-de-la-chapelle"/>


            </div>
        </div>
    );
};

export default ZerosixPage;