import React, { useEffect } from 'react';

import "../styles/components/_slot-animation.scss";

import tortilla1 from '../assets/pages/muchos-tacos/tortilla1.png';
import tortilla2 from '../assets/pages/muchos-tacos/tortilla2.png';

const SlotAnimation = () => {
    const firstWord=["sombrero","poncho","avocat","piñata","tequila","frida","tacos","cactus", "mariachi","calavera","jalapeño"]
    const secondWord=["essouflé","convertible","foudroyé","brulant","sale","aveugle","grossier","sadique", "sauvage", "populaire", "érotique", "paniqué","masqué", "électrique","surdoué"]
    const thirdWord=["en marbre","en lévitation","rôti","en enfer","au combat","en vacances","en cire", "à la retraite", "abattu", "unijambiste", "sur le ring", "pas cher", "qui grésille","en peau de croco","en boite"]

    const random = (number) => {
        return Math.floor(Math.random() * number);
    }
    
    
    const spin =()=>{
        const firstSelectedWord = document.querySelector('.first-selected-word');
        const secondSelectedWord = document.querySelector('.second-selected-word');
        const thirdSelectedWord = document.querySelector('.third-selected-word');
        firstSelectedWord.textContent=firstWord[random(firstWord.length)].toUpperCase();
        secondSelectedWord.textContent=secondWord[random(secondWord.length)].toUpperCase();
        thirdSelectedWord.textContent=thirdWord[random(thirdWord.length)].toUpperCase();
    }

    const spinInterval = ()=>{
        const interval = setInterval(()=>{
            spin()
        },40);

        setTimeout(()=>{
            clearInterval(interval)
        },3000)
    }


    useEffect(()=>{
        const hookInterval = setInterval(()=>{
            spinInterval();
        },6000)
        return ()=>{
            clearInterval(hookInterval)
        }
    })
    
    
    return (
        <div className='slot-animation'>
            <div className="words">
                <figure><img src={tortilla1} alt="Tortilla" /></figure>
                <figure><img src={tortilla2} alt="Tortilla 2" /></figure>
                <p className="first-selected-word">PINATA</p>
                <p className="second-selected-word">SEXY</p>
                <p className="third-selected-word">BORDELIQUE</p>
            </div>
        </div>
    );
};

export default SlotAnimation;