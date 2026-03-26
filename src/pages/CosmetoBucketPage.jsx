import React from 'react';
import { NavLink } from 'react-router-dom';
import MinLogo from '../components/MinLogo';
import Title from '../components/Title';
import AnimatedCauldron from '../components/Svg-components/AnimatedCauldron';

import '../styles/pages/cosmeto-bucket.scss';

import header from '../assets/pages/cosmeto-bucket/header.png'
import logo from '../assets/pages/cosmeto-bucket/logo.png';

import logo2 from '../assets/pages/cosmeto-bucket/logo2.png';
import colorsTypos from '../assets/pages/cosmeto-bucket/colors-typo.png';
//VISUALS ELEMENTS
import potion1 from '../assets/pages/cosmeto-bucket/potion1.png';
import potion2 from '../assets/pages/cosmeto-bucket/potion2.png';
import icons from '../assets/pages/la-reserve/icons.png';
//INTERFACES
import interfacesFront from '../assets/pages/cosmeto-bucket/interface-front.png';
import interfacesFront2 from '../assets/pages/cosmeto-bucket/interface-front2.png';
import FooterPages from '../components/FooterPages';
//LANGAGES
import languages from '../assets/pages/cosmeto-bucket/langages.png';


const LaReservePage = () => {
    window.scrollTo({ top: 0 });

    return (
        <div className='cosmeto-bucket'>
            <div className="container isPage">
                <header>
                    <NavLink to="/" className="min-logo">
                        <MinLogo color="white"/>
                    </NavLink>
                    <figure><img src={header} alt="Header"/></figure>
                    <figure class="logo"><img src={logo} alt="logo CBA"/></figure>
                </header>

                <section className="intro column">
                    <p>Cosmeto Bucket est une application web full-stack de gestion de recettes cosmétiques maison (DIY). Elle permet de créer, consulter et organiser des recettes de cosmétiques avec leurs ingrédients, catégories, étapes de fabrication et images.</p>
                    <p>Une fois créée, chaque recette est automatiquement disponible sur un portail public qui centralise l'ensemble des recettes et les rend accessibles à tous. Ce portail propose des filtres avancés (par catégorie, niveau de complexité, tag) pour trouver facilement la recette recherchée.</p>
                    <p>Les utilisateurs peuvent interagir avec les recettes : les liker, les marquer comme réalisées, laisser des commentaires ou poser des questions directement sur la fiche recette.</p>
                </section>

                <section className="identity column">
                    <Title text="charte graphique" color="B996E9" underLines="B996E9"/>

                    <h3>Logo, couleurs et typographies</h3>
                    <div className="identity-container">
                        <figure><img src={logo2} alt="Logo de la Réserve de la Chapelle" /></figure>
                        <figure><img src={colorsTypos} alt="Couleurs et typographies utilisées" /></figure>
                    </div>

                    <h3>éléments visuels</h3>
                    <AnimatedCauldron />
                    <div className="visuals-container">
                        <figure><img src={potion1} alt="Potion animée lorsque la répartition  de la recette est en cours de création" /></figure>
                        <figure><img src={potion2} alt="Potion animée lorsque la répartition dépasse la quantité totale de la recette" /></figure>
                    </div>

                    <h3>Icons</h3>
                    <figure className='icons'><img src={icons} alt="Icons utilisés pour l'application" /></figure>
                </section>

                <section className="interfaces column">
                    <Title text="maquettes" color="B996E9" underLines="B996E9"/>

                    <figure><img src={interfacesFront} alt="Maquettes des écrans de l'application" /></figure>

                    <figure><img src={interfacesFront2} alt="Maquettes des écrans de l'application" /></figure>
                </section>

                <section className="languages column">
                    <Title text="languages" color="B996E9" underLines="B996E9"/>
                    <figure>
                        <img src={languages} alt="Langages utilisés pour le front-end" />
                    </figure>
                </section>

                <FooterPages leftLink="faventine-joaillerie" rightLink="zerosix"/>

            </div>
        </div>
    );
};

export default LaReservePage;