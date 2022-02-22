import React from 'react'
import {AiFillCaretRight} from "react-icons/ai"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import "./style.scss"
function Buttons({children}) {
    const history = useHistory();
    return (
     
     <button id="play-buton" onClick={() => {
         history.push("/play")
     }}>
         <AiFillCaretRight />
         {children}
     </button>
      
    )
}

export default Buttons
