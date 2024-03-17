import React from 'react';
import headshot from "./images/headshot2.webp";
import "./profile.css";

export default function Profile(props) {
    const headshotStyles = {
        height: "100px",
        width: "100px",
        borderRadius: "10px"
    };

    return (
        <div className="profile-card">
            <img src={headshot} alt="headshot"></img>
            <p><b>Jimmy Chavada</b></p>
            <small><i>Fullstack Developer, Toronto</i></small>
            <h4>Skills</h4>
            <div className='tech-card'>
                {props.techs.map((tech, index) => (
                    <div key={index} className='tech-item-container'>
                        <small className='tech-item'>{tech}</small>
                    </div>
                ))}
            </div>
            <small>Joined June 1, 2022</small>
        </div>
    );
}
