import React, { useEffect } from 'react';

import "../styles/components/_slideshow.scss";

import rightArrow from "../assets/slider-right-arrow.svg";
import leftArrow from "../assets/slider-left-arrow.svg";


const Slideshow = (slidesContent) => {

    let slideIndex = 1;
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    useEffect(()=>{
        showSlides(slideIndex);
    })

    return (
        <div className='slideshow'>
            <figure onClick={()=>plusSlides(-1)}><img src={leftArrow} alt="Flèche précédente" /></figure>
            <div className="slideshow-container">
                {slidesContent.content.map((slide, index)=>(
                    <div className="mySlides fade" key={index}>
                        <figure> 
                            <img  src={require(`../assets/pages/${slide}`).default} alt={`personna-${index}`}/>
                        </figure>
                    </div>
                    ))
                }
            </div>
            <figure onClick={()=>plusSlides(1)}><img src={rightArrow} alt="Flèche suivante" /></figure>


            
        </div>
    );
};

export default Slideshow;