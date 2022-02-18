import React from 'react'
import {AiFillCaretRight} from "react-icons/ai"
import "./style.scss"
function Buttons({children}) {
    return (
     
     <button id="play-buton">
         <AiFillCaretRight />
         {children}
     </button>
      
    )
}

export default Buttons
