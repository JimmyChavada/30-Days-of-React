import React from 'react'
import "./subscribe.css"

export default function Subscribe() {
  return (
    <div className='subscribe-card'>
        <h2>SUBSCRIBE</h2>
        <h3>Sign up with your email to receive news and updates</h3>
        <div className='input-text'>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="email" placeholder="Email"></input>
        </div>
        <br></br>
        <button type="button"><b>Subscribe</b></button>
    </div>
  )
}
