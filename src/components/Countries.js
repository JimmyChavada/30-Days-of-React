import React, { useState, useEffect } from 'react';
import './countries.css';
import CountryCard from './CountryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Countries() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [initialNumCountries, setInitialNumCountries] = useState(0); 
    const [topTen, setTopTen] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (input || input === '') {
            fetchData(input);
        }
    }, [input]);

    const fetchData = async (countryName) => {
        let url = 'https://restcountries.com/v3.1/all';
        if (countryName) {
            url = `https://restcountries.com/v3.1/name/${countryName}`;
        }
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            if (Array.isArray(jsonData)) {
                const sortedData = jsonData.sort((a, b) => {
                    const countryA = a.name.common.toLowerCase();
                    const countryB = b.name.common.toLowerCase();
                    if (countryA < countryB) {
                        return -1;
                    }
                    if (countryA > countryB) {
                        return 1;
                    }
                    return 0;
                });
                setError(false);
                setData(sortedData);
                if (initialNumCountries === 0) {
                    setInitialNumCountries(sortedData.length);
                }
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    function handleInput(e) {
        const { value } = e.target;
        setInput(value);
    }

    function handleTopTen() {
        const sortedData = [...data].sort((a, b) => b.population - a.population);
        const topTen = sortedData.slice(0, 10);
        console.log(topTen)
        setTopTen(topTen);
    }

    return (
        <div className='main-wrapper'>
            <div className='country-wrapper'>
                <h1>World</h1>
                <h1>Countries Data</h1>
                <h3>Currently, we have {initialNumCountries} countries</h3>
            </div>

            <div className='searchBar'>
                <input
                    type='text'
                    placeholder='Search Countries'
                    onChange={handleInput}
                    value={input}
                />
            </div>

            <button onClick={handleTopTen}>Get Top Ten</button>

            <div className='countries'>
                <h1>All Country Data</h1>
            <div className='country-cards-container'>
                {error ? (
                    <h2>No data for this input</h2>
                ) : (
                    data.map(country => (
                        <CountryCard key={country.cca3} country={country} />
                    ))
                )}
            </div>

            <h1>Top Ten Countries:</h1>
            <ul>
                {topTen.map(country => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ul>
        </div>

        </div>
    );
}
