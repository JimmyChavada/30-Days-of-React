import React from 'react'
import { create, all, random } from "mathjs"
import RandomItem from "./Randomitem"
import "./numbercard.css"

function randomNumberGenerator() { 
  const math = create(all, {});
  const numbers = [] 
  for(let i = 0; i < 36; i++) { 
    numbers.push(math.randomInt(1, 200)); 
  }

  return numbers; // Return the generated number
}

export default function Number() {

  return (
    <div className='number-card'>
      <h1>Number Generator</h1>
      <p><i>This number generator marks random numbers, yellow for prime numbers, green for even numbers, and red for odd numbers</i></p>
      <RandomItem randomNumber={randomNumberGenerator()} />
    </div>
  )
}
