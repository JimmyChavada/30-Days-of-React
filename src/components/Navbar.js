import React, { useState } from 'react'
import "./navbar.css"

export default function Navigation() {


  

  const hrefStyle = { 
    textDecoration: "none",
    color: "black",
  
  }

  return (
    <nav>
      <h2><a href='/' style={hrefStyle}>30 Days of React</a></h2>
      <ul>
        <li><a href='/Number' style={hrefStyle}>Number Generator</a></li>
        <li><a href='/Dark' style={hrefStyle}>Dark Mode State</a></li>
        <li><a href='/events' style={hrefStyle}>Events</a></li>
        <li><a href='/forms' style={hrefStyle}>Forms</a></li>
        <li><a href='/sassy' style={hrefStyle}>Sass</a></li>
        <li><a href='/countries' style={hrefStyle}>Country Data</a></li>
      </ul>
    </nav>
  )
}

