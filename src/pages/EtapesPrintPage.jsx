import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';
import FooterPages from '../components/FooterPages';

import '../styles/pages/etapes-print.scss';

import logo from '../assets/pages/etapes-print/logo-etapes-print.png';
import screen from '../assets/pages/etapes-print/etapes-print-screen.png';

//LANDINGS
import landing1 from '../assets/pages/etapes-print/champions-banners-etapes-print.png';
import landing2 from '../assets/pages/etapes-print/summer-banners-etapes-print.png';
import landing3 from '../assets/pages/etapes-print/beer-day-banners-etapes-print.png';
import landing4 from '../assets/pages/etapes-print/dark-cat-day-banners-etapes-print.png';
import landing5 from '../assets/pages/etapes-print/back-to-school-banners-etapes-print.png';

//NEWSLETTERS
import newsletter1 from '../assets/pages/etapes-print/champions-newsletters-etapes-print.png';
import newsletter2 from '../assets/pages/etapes-print/back-to-school-newsletters-etapes-print.png';
import newsletter3 from '../assets/pages/etapes-print/dark-cat-day-newsletters-etapes-print.png';

const EtapesPrintPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='etapes-print'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure>
                        <img src={logo} alt="Logo Etapes Print"/>
                    </figure>
                </header>

                <section className='intro column'>
                    <p>Etapes print est une imprimerie en ligne.<br/>
                    En tant que webdesigner, j’ai été responsable de la communication digitale et en charge de tous les événements marketing.
                    </p>
                </section>

                <section className="screens column">
                    <Title text="bannières" color="333333" underLines="C8B18D"/>
                    <figure><img src="" alt="" /></figure>
                    <figure className='homepage'>
                        <img src={screen} alt="Ecran d'accueil du site" />
                    </figure>
                    <p>Ecran d'accueil du site</p>

                    <div className="landing">
                        <figure><img src={landing1} alt="Bannière pour la victoire de la coupe du monde" /></figure>
                        <figure><img src={landing2} alt="Bannière pour l'arrivée de l'été" /></figure>
                        <figure><img src={landing3} alt="Bannière pour la fête de la bière" /></figure>
                        <figure><img src={landing4} alt="Bannière pour la journée du chat noir" /></figure>
                        <figure><img src={landing5} alt="Bannière pour la rentrée" /></figure>
                    </div>
                </section>

                <section className="newsletters column">
                    <Title text="newsletters" color="333333" underLines="C8B18D"/>
                    <div className="newsletter">
                        <figure><img src={newsletter1} alt="Newsletter pour la coupe du monde" /></figure>
                        <figure><img src={newsletter2} alt="Newsletter pour la rentrée" /></figure>
                        <figure><img src={newsletter3} alt="Newsletter pour la journée du chat noir" /></figure>
                    </div>
                    <p>Newsletters réalisées sur Mailjet</p>
                </section>

                <FooterPages leftLink="la-reserve-de-la-chapelle" rightLink="courrier-plus"/>

            </div>
        </div>
    );
};

export default EtapesPrintPage;