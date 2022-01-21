import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';

import '../styles/pages/courrier-plus.scss';

//LOGOS
import logo from '../assets/pages/courrier-plus/Courrier-plus-logo.png';
import logo2 from '../assets/pages/courrier-plus/courrier-plus-logo-2.png';
import logoKeeped from '../assets/pages/courrier-plus/logo-keeped.png';
import logo3 from '../assets/pages/courrier-plus/courrier-plus-logo-3.png';
import logo4 from '../assets/pages/courrier-plus/courrier-plus-logo-4.png';
import logo5 from '../assets/pages/courrier-plus/courrier-plus-logo-5.png';
import logo6 from '../assets/pages/courrier-plus/courrier-plus-logo-6.png';

//COLORS
import color1 from '../assets/pages/courrier-plus/colors-1.svg';
import color2 from '../assets/pages/courrier-plus/colors-2.svg';
import color3 from '../assets/pages/courrier-plus/colors-3.svg';

import icons from '../assets/pages/courrier-plus/icons.png';

//UI INTERFACES
import screen1 from '../assets/pages/courrier-plus/1.jpeg';
import screen2 from '../assets/pages/courrier-plus/2.jpeg';
import screen3 from '../assets/pages/courrier-plus/3.jpeg';
import screen4 from '../assets/pages/courrier-plus/4.jpeg';
import screen5 from '../assets/pages/courrier-plus/5.jpeg';
import screen6 from '../assets/pages/courrier-plus/6.jpeg';
import screen7 from '../assets/pages/courrier-plus/7.jpeg';
import screen8 from '../assets/pages/courrier-plus/8.jpeg';
import screen9 from '../assets/pages/courrier-plus/9.jpeg';
import screen10 from '../assets/pages/courrier-plus/10.jpeg';
import screen11 from '../assets/pages/courrier-plus/11.jpeg';

//STORES
import storeApple from '../assets/pages/courrier-plus/store-1.jpeg';
import storeGoogle from '../assets/pages/courrier-plus/store-2.jpeg';
import FooterPages from '../components/FooterPages';


const CourrierPlusPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='courrier-plus'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure>
                        <img src={logo} alt="Logo Courrier +"/>
                    </figure>
                </header>

                <section className='intro column'>
                    <p>Lors de mes deux années au pôle innovation du siège de La Poste en tant que UX/UI Designer, j’ai eu l’occasion de mener plusieurs projets, dont Courrier +, une application de réalité augmentée : l’utilisateur peut scanner son courrier et visualiser son contenu en réalité augmentée.</p>
                    <p>Pour mener à bien ce projet, nous avons réalisé des ateliers de créativité avec des acteurs identifiés (clients de La Poste, Facteurs, et Profils Tech ).</p>
                    <p>A l’aide de ces ateliers et des supports associés, nous avons réuni suffisamment d’informations (sur les besoins, les usages et les moyens techniques) pour concevoir le parcours utilisateur d’une application centrée utilisateur.</p>
                </section>

                <section className='identity column'>
                    <Title text="charte graphique" color="333333" underLines="1C8699"/>
                    <h3>logos</h3>
                    <div className="logo-container">
                        <figure><img src={logo2} alt="Logo retenu pour l'application" /></figure>
                        <figure className='logo-keeped'>
                            <img src={logoKeeped} alt="Indication 'Logo retenu'"/>
                        </figure>
                    </div>
                    <div className="logos-container">
                        <figure><img src={logo3} alt="Proposition de logo" /></figure>
                        <figure><img src={logo4} alt="Proposition de logo" /></figure>
                        <figure><img src={logo5} alt="Proposition de logo" /></figure>
                        <figure><img src={logo6} alt="Proposition de logo" /></figure>
                    </div>
                    <h3>couleurs</h3>
                    <div className="colors-container">
                        <figure><img src={color1} alt="Couleur de l'application" /></figure>
                        <figure><img src={color2} alt="Couleur de l'application" /></figure>
                        <figure><img src={color3} alt="Couleur de l'application" /></figure>
                    </div>
                    <h3>icons</h3>
                    <figure className='icons'><img src={icons} alt="Icons utilisés dans l'application" /></figure>
                </section>

                <section className='interfaces column'>
                    <Title text="maquettes" color="333333" underLines="1C8699"/>
                    <div className="interfaces-container">
                        <figure><img src={screen1} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen2} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen3} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen4} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen5} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen6} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen7} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen8} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen9} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen10} alt="Maquette de l'application" /></figure>
                        <figure><img src={screen11} alt="Maquette de l'application" /></figure>
                    </div>
                </section>

                <section className="stores column">
                    <Title text="stores" color="333333" underLines="1C8699"/>
                    <p>Application disponible sur l'Apple Store et le Play Store</p>
                    <div className="stores-container">
                        <figure><img src={storeApple} alt="Disponible sur Apple Store" /></figure>
                        <figure><img src={storeGoogle} alt="Disponible sur Play Store" /></figure>
                    </div>
                </section>

                <FooterPages leftLink="etapes-print" rightLink="eggshot"/>

            </div>
            
        </div>
    );
};

export default CourrierPlusPage;