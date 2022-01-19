import React, { useEffect, useState } from 'react';

import "../styles/components/_slot-animation.scss";

import tortilla1 from '../assets/pages/muchos-tacos/tortilla1.png';
import tortilla2 from '../assets/pages/muchos-tacos/tortilla2.png';

const SlotAnimation = () => {
    // const [isInterval, setIsInterval] = useState(false)
    const firstWord=["sombrero","poncho","avocat","pinata","tequila","frida","tacos","cactus"]

    const random = (number) => {
        return Math.floor(Math.random() * number);
    }
    
    
    const spin =()=>{
        const firstSelectedWord = document.querySelector('.first-selected-word');
        const secondSelectedWord = document.querySelector('.second-selected-word');
        const thirdSelectedWord = document.querySelector('.third-selected-word');
        // let random = Math.floor(Math.random() * firstWord.length);
        firstSelectedWord.textContent=firstWord[random(firstWord.length)].toUpperCase();
        secondSelectedWord.textContent=firstWord[random(firstWord.length)].toUpperCase();
        thirdSelectedWord.textContent=firstWord[random(firstWord.length)].toUpperCase();
        // selectedWord.toUpperCase();
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
        setInterval(()=>{
            spinInterval();
        },6000)
    })
    
    // useEffect(()=>{
    //     if(!isInterval){
    //         // const interval = setInterval(()=>{
    //         //     spin()
    //         // },60);
    //         spin()
    //         return () => clearInterval(spin)
            
    //     }
    // },[isInterval]);
    

    return (
        <div className='slot-animation'>
            <div className="words">
                <figure><img src={tortilla1} alt="Image d'une tortilla" /></figure>
                <figure><img src={tortilla2} alt="Image d'une tortilla" /></figure>
                <p className="first-selected-word">PINATA</p>
                <p className="second-selected-word">SEXY</p>
                <p className="third-selected-word">BORDELIQUE</p>
            </div>
        </div>
    );
};

export default SlotAnimation;