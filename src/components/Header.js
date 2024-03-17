import React from 'react';
import "./header.css";

const Header = ({instructor, date}) => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Instructor: {instructor} </p>
        <small>Date: {date} </small>
      </div>
    </header>
  );
};

export default Header;
