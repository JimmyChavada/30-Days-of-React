import React, { useState } from 'react';
import './Sass.scss';
import axios from 'axios';

export default function Sass() {
    const [data, setData] = useState();

    const makeCall = async () => { 
        const API_URL = 'https://api.thecatapi.com/v1/breeds';
        
        try {
            const response = await axios.get(API_URL);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    function catWeight() {
      if(data && data.length > 0) { 
          const averageWeight = []; 
          for(let i = 0; i < data.length; i++) { 
              averageWeight.push(data[i].weight.imperial.split('-')[0]); 
          }
  
          let sum = 0.0; // Change const to let
          for(let j = 0; j < averageWeight.length; j++) {
              sum = sum + parseFloat(averageWeight[j]); // Convert to float before adding
          }
  
          console.log("Average weight: ", sum); 
          return sum/averageWeight.length; // Return the calculated sum
      } else { 
          return "Loading"; 
      }
  }

  function getAge() { 
    if(data && data.length > 0) { 
        const averageHeight = []; 
        for(let i = 0; i < data.length; i++) { 
            averageHeight.push(data[i].life_span.split('-')[0]);
        }

        let sum = 0.0; 
        for(let j = 0; j < averageHeight.length; j++) { 
            sum = sum + parseFloat(averageHeight[j]); 
        }

        const average = sum / averageHeight.length;
        const roundedAverage = average.toFixed(2); // Round to 2 decimal places

        console.log("Average height: ", roundedAverage); 
        return roundedAverage; 
    }
    else {
        return "Loading"; 
    }
}

  
    return (
        <div className='sass-wrapper'>
            <h1>
                Hello
                my code has nested scss components
            </h1>
            <button onClick={makeCall}>Press here to make an API call regarding some cats</button>

            <h3>The average cat weighs about {catWeight()} KG, and live about {getAge()} years </h3>
        </div>
    );
}
