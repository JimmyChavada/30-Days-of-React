import React, {useState} from 'react'
import "./dark.css"


export default function DarkMode() {
    const [background, setBackground] = useState(true)

    
    const bodyStyle = { 
        backgroundColor: background ? "black" : "white",
        color: background ? "white" : "black"
    }
    


  return (
    <div className='darkmode-wrapper' style={bodyStyle}>
        <h1>This is a demonstration of the dark mode functionality </h1>
        <p>If you press this button the state will change, and the mode will change</p>
        <button onClick={() => setBackground(!background)}>Change Color</button>
        <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h4>
     
    </div>
  )
}
