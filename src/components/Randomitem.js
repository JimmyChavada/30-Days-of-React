import React from 'react';
import "./randomitem.css";

export default function Randomitem(props) {
    const oddStyle = { 
        backgroundColor: "red"
    };

    const evenStyle = { 
        backgroundColor: "green"
    };

    const primeStyle = { 
        backgroundColor: "yellow"
    };

    // Define isPrime as a function declaration
    function isPrime(number) { 
        if (number === 1) { 
            return true;
        } else if (number > 1) { 
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    return (
        <div className='grid-container'>
            {props.randomNumber.map((number) => (
                <div 
                    className='random-item' 
                    style={isPrime(number) ? primeStyle : (number % 2 === 0 ? evenStyle : oddStyle)}
                >
                    {number} 
                </div>
            ))}
        </div>
    );
}
