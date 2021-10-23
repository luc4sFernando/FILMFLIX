import React from 'react'
import {  useEffect, useState } from 'react'
import { RowWrap, H2, ImgPost, PostWrap, PostContainer } from './style';

import { fetchMovies, fetchVideo } from '../../services/api';


function Card({ title, fetchUrl, isLargeRow }) {
     const [movie, setMovie] = useState([]);

    const [post, setPost] = useState([])
    const [hover, setHover] = useState('');
    // const [id, setId] = useState('')


    useEffect(() => {
        async function getDataMovieApi() {
            const movies = await fetchMovies(fetchUrl);
            
            const videos = await Promise.all(movies.map(item => fetchVideo(item.id)), setMovie(movies) );
         
            movies.map((movie, index)=>{
                if(videos[index].length > 0){
                    movie.trailer = videos[index]
                }
                return
            })
         
          
          
          setPost(movies)
          
        }
       
        getDataMovieApi()
    }, [fetchUrl])

  
   
    return (
        <>
       
            <RowWrap>
                <H2>
                    {title}
                </H2>
                <PostContainer>
                    {movie.map((movie, index )=> ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <PostWrap key={movie.id} 
                        >
                            
                            <ImgPost src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} isLarge={isLargeRow} id={movie.id} onMouseEnter={(e) => {
                               setHover(e.target.id)
                             
                            }} />
                            
                        </PostWrap>
                           
                    ))}
                   
                </PostContainer>
                
            </RowWrap>
    
        </>
    )
}

export default Card
