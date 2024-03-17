import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Number from "./components/Number"
import Header from "./components/Header"
import Main from "./components/Main"
import DarkMode from "./components/DarkMode"
import Events from "./components/Events"
import Forms from "./components/Forms"
import Sass from "./components/Sass"
import Countries from "./components/Countries"

export default function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/Number" element={<Number />} />
        <Route path="/" element={
          <div> {/* Wrap multiple elements in a parent element */}
            <Header instructor="Jimmy Chavada" date="June 1, 2024"/>
            <Main  />
          </div>
        } />
        <Route path="/Dark" element={<DarkMode />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/forms" element={<Forms />}/>
        <Route path="/sassy" element={<Sass />}/>
        <Route path="/countries" element={<Countries />}/>
       </Routes>
    </Router>
  )
}
