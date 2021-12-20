import React from 'react';

const Title = ({text, color}) => {
    return (
        <div className='title' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2 style={{textAlign:'center', marginBottom:0, color:`${color}`}}>{text}</h2>
            <svg width="197" height="13" viewBox="0 0 197 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                style={{strokeWidth:"3", strokeLinecap:"round"}}
                d="M11 2.97143C16.2217 2.34926 21.404 2 26.6591 2C57.213 2 87.7757 2.32937 118.33 2.48571C130.984 2.55047 143.647 2.74813 156.298 3.08571C160.869 3.20769 165.496 3.14531 170 4" stroke="#8681D5" />
                <path 
                style={{strokeWidth:"3", strokeLinecap:"round"}}
                d="M2 9.94446C66.3377 9.94446 130.666 10.9445 195 10.9445" stroke="#8681D5"/>
                <path 
                style={{strokeWidth:"3", strokeLinecap:"round"}}
                d="M175 3.6875H175.938" stroke="#8681D5" />
            </svg>

        </div>
    );
};

export default Title;