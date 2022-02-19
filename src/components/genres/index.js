import React, { useEffect, useState } from 'react'
import { useFetchGenreMovies } from '../../hooks/useFetchGenreMovies';
import "./style.scss"
const Genres = ({genre}) => {
    const [currentGenre, setCurrentGenre] = useState([])
    const currentGenres = useFetchGenreMovies();

   useEffect(() => {
    
    const result = currentGenres.filter((v, i) => {
        return v.id == genre[i]
    })
  
    setCurrentGenre(result)
   }, [currentGenres])

 console.log(currentGenre)
   
  return (
      <>
    {currentGenre.length > 0 ? (
    <>
    {currentGenre.map(val => {
        return (
            <div>
                <p>{val.name}</p>
            </div>
        )
    })}
    </>
    ) : <p>Genres</p>}
      </>

  )
}

export default Genres