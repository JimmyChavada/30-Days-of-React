import React, { useState } from 'react';
import { create, all } from 'mathjs';
import './events.css';

export default function Events() {
    const math = create(all, {});
    const [randomStyle, setRandomStyle] = useState({ transform: 'translate(0px, 0px)' });

    function randomPos() {
        const randomX = math.randomInt(-250, 200);
        const randomY = math.randomInt(-400, 300);
        const style = {
            transform: `translate(${randomX}px, ${randomY}px)`
        };
        setRandomStyle(style);
    }

    return (
        <div className='events-wrapper'  onMouseEnter={randomPos} style={randomStyle}>
            <h1 className='box'>
                React is fun, try to press me :)
            </h1>
        </div>
    );
}
