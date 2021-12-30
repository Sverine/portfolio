import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import { Player } from '@lottiefiles/react-lottie-player';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';

import '../styles/pages/la-reserve.scss';

import header from '../assets/pages/la-reserve/header.jpg';
import logo from '../assets/pages/la-reserve/logo.png';

import logo2 from '../assets/pages/la-reserve/logo2.jpg';
import colorsTypos from '../assets/pages/la-reserve/colors-typo.png';
//VISUALS ELEMENTS
import bgTyped from '../assets/pages/la-reserve/bg-typed.jpg';
import character from '../assets/pages/la-reserve/character.jpg';
import book from '../assets/pages/la-reserve/book.png';
import icons from '../assets/pages/la-reserve/icons.png';
//INTERFACES
import interfacesFront from '../assets/pages/la-reserve/interfaces-front.png';
import interfacesBack from '../assets/pages/la-reserve/interfaces-back.png';
import FooterPages from '../components/FooterPages';
import Slideshow from '../components/Slideshow';

const LaReservePage = () => {
    window.scrollTo({ top: 0 });

    //TYPED JS CONFIGURATION
    const el = useRef(null);
    const typed = useRef(null);
    const options = {
        strings: [
        'BD',
        'livres de cuisine',
        'romans'
        ],
        typeSpeed: 50,
        backSpeed: 50,
    };

    const personas = ["la-reserve/persona-charline.jpg","la-reserve/persona-yves.jpg","la-reserve/persona-vincent.jpg","la-reserve/persona-isabelle.jpg"]

    useEffect(() => {
        typed.current = new Typed(el.current, options);
        
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [options])

    return (
        <div className='la-reserve'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure><img src={header} alt="Header"/></figure>
                    <figure><img src={logo} alt="logo FIAAC"/></figure>
                </header>

                <section className="intro column">
                    <p>La Réserve de la Chapelle est une application web d’une médiathèque souhaitant mettre en place le système de click & collect.
                    C’est un projet réalisé dans le cadre de ma formation de développeur web .</p>
                    <p>La Réserve de la Chapelle propose un catalogue en ligne à destination des adhérents pour consulter et réserver des livres. 
                    L’application dispose également d’une interface back-office accessible pour les employés de la Réserve leur permettant de s’occuper de la gestion de la médiathèque. L’employé peut valider les adhésions en attente, mettre à jour les status des emprunts lorsque le client vient chercher son livre ou le ramener, et créer, modifier ou supprimer des livres de la médiathèque.</p>
                    <button>
                        <a target="_blank" href="https://lareserve.herokuapp.com/">Visiter le site</a>
                    </button>
                </section>

                <section className="personas column">
                    <Title text="personas" color="333333" underLines="33306F"/>
                    <p>Charline, Yves, Vincent et Isaelle</p>
                    <div className="personas-container">
                        <Slideshow content={personas} urlTest="la-reserve/persona-"/>
                    </div>
                    
                    <p>Puisque l’application dispose de plusieurs accès et fonctionnalités en fonction du rôle des utilisateurs, j’ai imaginé 4 personas (Admin, Employé, Adhérent, Inscrit)</p>
                </section>

                <section className="identity column">
                    <Title text="charte graphique" color="333333" underLines="33306F"/>

                    <h3>Logo, couleurs et typographies</h3>
                    <div className="identity-container">
                        <figure><img src={logo2} alt="Logo de la Réserve de la Chapelle" /></figure>
                        <figure><img src={colorsTypos} alt="Couleurs et typographies utilisées" /></figure>
                    </div>

                    <h3>éléments visuels</h3>
                    <div className="typed-container" style={{backgroundImage:`url(${bgTyped})`}}>
                        <p>Réservez vos <span ref={el} /> <br/>en un clic !</p>
                        <button>je m'inscris</button>
                    </div>
                    <div className="visuals-container">
                        <figure><img src={character} alt="Photo de profil par défaut d'un utilisateur" /></figure>
                        <figure><img src={book} alt="Couverture d'un livre" /></figure>
                    </div>

                    <h3>animations lottie</h3>
                    <div className="lotties-container">
                        <Player autoplay loop src="https://assets8.lottiefiles.com/packages/lf20_fx6infep.json"
                        style={{ height: '300px', width: '300px' }}>
                        </Player>
                        <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_i1lnx7zw.json"
                        style={{ height: '300px', width: '300px' }}>
                        </Player>
                    </div>
                    <h3>Icons</h3>
                    <figure className='icons'><img src={icons} alt="Icons utilisés pour l'application" /></figure>
                </section>

                <section className="interfaces column">
                    <Title text="maquettes" color="333333" underLines="33306F"/>

                    <figure><img src={interfacesFront} alt="Maquettes des écrans de l'application côté front" /></figure>
                    <p>Page d’accueil du catalogue et détails d’un livre sectionné</p>

                    <figure><img src={interfacesBack} alt="Maquettes des écrans de l'application côté back" /></figure>
                    <p>Ecrans du back-office</p>
                </section>

                <FooterPages leftLink="zerosix" rightLink="etapes-print"/>

            </div>
        </div>
    );
};

export default LaReservePage;