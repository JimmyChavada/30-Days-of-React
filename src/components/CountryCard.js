import React from 'react';
import './countryCard.css';

export default function CountryCard({ country }) {
    if (!country) {
        return <div>Loading...</div>;
    }

    console.log(country); 

    return (
        <div className='card-container'>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>{country.name.common}</h3>
            <h4>Capital: {country.capital}</h4>
            <h4>Language: {country.language}</h4>
            <h4>Population: {country.population}</h4>
        </div>
    );
}
