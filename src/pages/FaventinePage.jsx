import React from 'react';
import MinLogo from '../components/MinLogo';
import FooterPages from '../components/FooterPages';
import Title from '../components/Title';
import { NavLink } from 'react-router-dom';

import '../styles/pages/faventine.scss';

import header from '../assets/pages/faventine/faventine-joaillerie-header.jpeg';
import logo from '../assets/pages/faventine/faventine-joaillerie-logo.png';
import persona from '../assets/pages/faventine/personas.jpg';
import logoBlack from '../assets/pages/faventine/faventine-joaillerie-black-logo.png';
import colors from '../assets/pages/faventine/faventine-colors.svg';
import typos from '../assets/pages/faventine/faventine-typo.svg';
import leafs from '../assets/pages/faventine/visual-element-left.svg';
import underline from '../assets/pages/faventine/visual-element-right.svg';
import icons1 from '../assets/pages/faventine/icon-left.svg';
import icons2 from '../assets/pages/faventine/icon-right.svg';
import gemsIcons1 from '../assets/pages/faventine/gems-top-left.svg';
import gemsIcons2 from '../assets/pages/faventine/gems-top-right.svg';
import gemsIcons3 from '../assets/pages/faventine/gems-bottom-left.svg';
import gemsIcons4 from '../assets/pages/faventine/gems-bottom-right.svg';
import emailsIcons from '../assets/pages/faventine/email-icons.svg';
import packaging from '../assets/pages/faventine/faventine-joaillerie-packaging.jpeg';
import screens from '../assets/pages/faventine/faventine-joaillerie-screens.png';
import productArrow from '../assets/pages/faventine/products-page.svg';
import workArrow from '../assets/pages/faventine/work-page.svg';

const FaventinePage = () => {
    return (
        <div className='faventine'>
            <div className="container isPage">
                <NavLink to="/" className="min-logo">
                    <MinLogo color="white"/>
                </NavLink>
                <header>
                    <img src={header} alt="Main portant un solitaire en diamant"/>
                    <img className="logo" src={logo} alt="Logo Faventine Joaillerie"/>
                </header>

                <section className="intro column">
                    <p>Faventine Joaillerie est une joaillerie en ligne personnalisable.</p>
                    <p>Créée en mars 2020, cette nouvelle marque de bijoux s’engage dans une démarche plus responsable.</p>
                    <p>Conçue et imaginée avec un gemmologue, la marque propose une vingtaine de pierres fines et précieuses. Cette spécialité permet la découverte de merveilleuses gemmes souvent moins connues du grand public.</p>
                    <p>Ces valeurs ont permis la création de l’identité graphique de la marque, la conception des éléments de communication et de packaging et enfin l’intégration web de la solution de personnalisation à travers une interface adaptée aux utilisateurs préalablement définis (personas).</p>
                    <button>
                        <NavLink to="/">
                            visiter le site
                        </NavLink>
                    </button>
                </section>

                <section className="personas column">
                    <Title text="Personas" color="333333" underLines="207A80"/>
                    <p>Jeanne, Camille et Jean</p>
                    <figure>
                        <img src={persona} alt="Persona de Faventine Joaillerie"/>
                    </figure>
                </section>

                <section className="identity column">
                    <Title text="Identité graphique" color="333333" underLines="207A80"/>
                    <h3>logo, couleurs et typographies</h3>

                    <div className="identity-img">
                        <figure>
                            <img src={logoBlack} alt="Logo de Faventine Joaillerie en noir" />
                        </figure>
                        <figure>
                            <img src={colors} alt="Couleurs utilisées pour Faventine Joaillerie" />
                        </figure>
                        <figure>
                            <img src={typos} alt="Typographies utilisées pour Faventine Joaillerie" />
                        </figure>
                    </div>

                    <h3>éléments visuels</h3>
                    <div className="visual-elements">
                        <figure>
                            <img src={leafs} alt="Feuilles dessinées" />
                        </figure>
                        <figure>
                            <img src={underline} alt="Traits et séparateurs" />
                        </figure>
                    </div>

                    <h3>Icons</h3>
                    <div className="icons">
                        <figure>
                            <img src={icons1} alt="icons utilisés"/>
                        </figure>
                        <figure>
                            <img src={icons2} alt="icons utilisés"/>
                        </figure>
                    </div>
                    <p>Description technique des bijoux</p>

                    <div className="gems-icons">
                        <div className="top">
                            <figure>
                                <img src={gemsIcons1} alt="icons des gemmes disponibles à la vente"/>
                            </figure>
                            <figure>
                                <img src={gemsIcons2} alt="icons des gemmes disponibles à la vente"/>
                            </figure>
                        </div>
                        <div className="bottom">
                            <figure>
                                <img src={gemsIcons3} alt="icons des gemmes disponibles à la vente"/>
                            </figure>
                            <figure>
                                <img src={gemsIcons4} alt="icons des gemmes disponibles à la vente"/>
                            </figure>
                        </div>
                    </div>
                    <p>Gemmes disponibles depuis la page produit</p>

                    <div className="emails-icons">
                        <figure>
                            <img src={emailsIcons} alt="Icons des emails"/>
                        </figure>
                    </div>
                    <p>Icons présents dans les emails</p>

                    <h3>packaging</h3>
                    <figure className="packaging-img">
                        <img src={packaging} alt="Image des différents packaging utilisés" />
                    </figure>
                    <p>Création du contenu envoyé dans la commande :<br/>Ecrin sérigraphié, carte de visite, carte de remerciement et emballage d’expédition</p>
                </section>

                <section className="interfaces column">
                    <Title text="Maquettes et intégration" color="333333" underLines="207A80"/>
                    <div className="screens">
                        <figure className="product-arrow">
                            <img src={productArrow} alt="Flêche pointant vers la page produit"/>
                        </figure>
                        <figure>
                            <img src={screens} alt="Maquettes de la page produit et notre atelier"/>
                        </figure>
                        <figure className="work-arrow">
                            <img src={workArrow} alt="Flêche pointant vers la page atelier"/>
                        </figure>
                    </div>
                </section>

                <FooterPages leftLink="" rightLink=""/>

            </div>
        </div>
    );
};

export default FaventinePage;