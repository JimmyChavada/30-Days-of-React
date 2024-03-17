import React from 'react'
import ImageCard from "./Imagecard"
import Profile from "./Profile"
import Subscribe from "./Subscribe"
import "./main.css"


export default function Main() {
    const techs = ["HTML", "CSS", "Python", "Java", "React", "Flask", "SQL", "XML", "Confluence", "Jira", "C", "ARM"]
  return (
    <div className='main-wrapper'>
        <Profile    techs={techs}/>
        <ImageCard               />
        <Subscribe               /> 
    </div>
  ) 
}
