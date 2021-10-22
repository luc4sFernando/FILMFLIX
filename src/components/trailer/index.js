import React from 'react'
import { MovieContainer, Trailer } from './style'


function Video({link}) {
    return (
      <MovieContainer>
        <Trailer width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&?autoplay=1">
        </Trailer>
          
      
      </MovieContainer>
    )
}

export default Video
