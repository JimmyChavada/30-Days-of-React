import React from 'react';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from "./images/react.png"
import './image.css';

export default function Imagecard() {
    const imageStyles = { 
        height: "100px", // Change length to height
        width: "90px",
        padding: "50px"
    };

    return (
        <div className='card'>
            <small>Front end technologies</small>
            <div className='image-card'>
                <img src={html} alt="html" style={imageStyles} />
                <img src={css} alt="css" style={imageStyles} />
                <img src={js} alt="js" style={imageStyles} />
                <img src={react} alt="react" style={imageStyles} /> 
            </div>
        </div>
    );
}
