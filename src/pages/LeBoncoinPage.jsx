import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';

import '../styles/pages/le-boncoin.scss';

import header from '../assets/pages/leboncoin/header.jpg';
import logo from '../assets/pages/leboncoin/logo.png';
//MOCKUPS AND SCREENS
import desktopHome from '../assets/pages/leboncoin/desktop-home.png';
import desktopProduct from '../assets/pages/leboncoin/desktop-product-page.png';
import mobileHome from '../assets/pages/leboncoin/mobile-home.png';
import mobileProduct from '../assets/pages/leboncoin/mobile-product-page.png';
import FooterPages from '../components/FooterPages';

const LeBoncoinPage = () => {
    window.scrollTo({ top: 0 });
    return (
        <div className='le-boncoin'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure><img src={header} alt="Header"/></figure>
                    <div className="visual-intro">
                        <figure><img src={logo} alt="logo FIAAC"/></figure>
                        <p>Conception d’une nouvelle interface plus moderne et responsive</p>
                    </div>
                </header>

                <section className="intro column">
                    <p>Le Boncoin est un site de petites annonces en France.
                    Fort de son succès, le site internet génère plus de 60 000 offres chaque jour. Par conséquent, le design des interfaces doit être simple et adaptable en fonction des interactions possibles avec les utilisateurs. <br/>Leur mission depuis quelques années consiste à faire évoluer l’expérience utilisateur et proposer une solution plus adaptée à l’évolution des demandes.</p>
                    <p>Dans le cadre d’un projet d’école, j’ai dû relever ce même défi. 
                    J’ai décidé de repenser l'ergonomie du site internet en proposant de nouveaux usages tout en prenant soin de garder l’identité forte de l’entreprise.</p>
                </section>

                <section className="interfaces column">
                    <Title text="maquettes" color="333333" underLines="F36600"/>

                    <div className="desktop-container">
                        <h3>desktop</h3>

                        <div className="homepage">
                            <figure><img src={desktopHome} alt="Mockup écran d'accueil" /></figure>
                            <ul>
                                <li className='heading'>HOMEPAGE</li>
                                <li>Barre de recherche visible dès la première page</li>
                                <li>Système de recherche par km autour de soi</li>
                                <li>Connexion/Déconnexion</li>
                                <li>Navigation simplifiée</li>
                            </ul>
                        </div>
                        <div className="product-page">
                            <figure><img src={desktopProduct} alt="Mockup page produit" /></figure>
                            <ul>
                                <li className='heading'>PAGE PRODUIT</li>
                                <li>Design épuré et moins chargé</li>
                                <li>Autres articles à proximité de chez moi</li>
                                <li>Historique des derniers articles consultés</li>
                                <li>Barre de recherche : “me prevenir lorsque cet article est situé à moins de 60km de chez moi”</li>
                                <li>Ajout de fonctionnalités visibles grâce à l’utilisation d’accordéon
                                    <ul className='features-list'>
                                        <li><span>Détails de l'article <br/></span>Afficher plus d’informations</li>
                                        <li><span>Moyens de paiement <br/> </span>Paiements proposés par le vendeur</li>
                                        <li><span>Situation géographique <br/> </span>Google Map avec localisation</li>
                                        <li><span>Conversation <br/> </span>Tchat visible par tous les visiteurs pour connaître les questions et réponses déjà échangées</li>
                                        <li><span>Profil <br/> </span>Profil du vendeur avec une photo, les articles qu’il vend ainsi que son indice de fiabilité <i>(note de 1 à 5)</i></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3>mobile</h3>
                    <div className="mobile-container">
                        <div className="homepage">
                            <ul>
                                <li className='heading'>HOMEPAGE</li>
                                <li>Un seul CTA (call to action) pour simplifier la requpete principale</li>
                                <li>Navigation sous forme de burger</li>
                            </ul>
                            <figure><img src={mobileHome} alt="Mockup page d'accueil sur mobile" /></figure>
                        </div>
                        <div className="product-page">
                            <ul>
                                <li className='heading'>PAGE PRODUIT</li>
                                <li>Photos de l’article en pleine page avec carrousel automatique et au swipe</li>
                            </ul>
                            <figure><img src={mobileProduct} alt="Mockup page produit sur mobile" /></figure>
                        </div>
                    </div>
                </section>

                <FooterPages leftLink="" rightLink="fiaac"/>

            </div>
        </div>
    );
};

export default LeBoncoinPage;