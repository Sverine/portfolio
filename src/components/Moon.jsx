import React, { useEffect, useState } from 'react';

const Moon = ({color}) => {
    const [moonColor, setMoonColor] = useState("#302A8B");


    useEffect(()=>{
        color==="#333333"? setMoonColor("#302A8B"):setMoonColor("#F4FFAD");
    },[moonColor,color])

    return (
        <div className='moon'>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                fill={moonColor==="#F4FFAD"? "#F4FFAD":"none"}
                d="M10.7579 1.7406C9.50517 1.86794 8.26198 2.27924 7.12457 2.99632C3.18977 5.47701 2.01098 10.6778 4.49167 14.6126C6.97236 18.5474 12.1731 19.7262 16.1079 17.2455C17.2454 16.5284 18.1525 15.584 18.8075 14.5086C15.7266 14.8218 12.5882 13.4174 10.8245 10.62C9.06095 7.82263 9.14693 4.3854 10.7579 1.7406Z" stroke={moonColor} 
                style={{strokeWidth:"2", strokeLinejoin:"round"}}/>
                <circle cx="0.733333" cy="3.20001" r="0.733333" fill={moonColor} style={{fillOpacity:"0.7"}}/>
                <circle cx="16.1334" cy="2.46667" r="1.46667" fill={moonColor} style={{fillOpacity:"0.5"}}/>
                <circle cx="15.4001" cy="22.2667" r="0.733333" fill={moonColor} style={{fillOpacity:"0.5"}}/>
                <circle cx="21.2668" cy="7.6" r="0.733333" fill={moonColor}/>
            </svg>
        </div>
    );
};

export default Moon;