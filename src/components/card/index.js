import React from 'react'
import {  useEffect, useState } from 'react'
import { RowWrap, H2, ImgPost, PostWrap, PostContainer} from './style';
import { setPost } from '../../features/counter/stockSlice';
import { fetchMovies, fetchVideo } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';



function Card({ title, fetchUrl, isLargeRow }) {
    const dispatch = useDispatch()
    const [movie, setMovie] = useState([]);

    const id = useSelector(state => state.stock.id)


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
           
            dispatch(setPost(movies))
        }
       
        getDataMovieApi()
    }, [fetchUrl])

   useEffect(() => {
      console.log(id)
   }, [id])
    
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
                            
                            <ImgPost src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} isLarge={isLargeRow} id={movie.id}  />
                          
                    
                        </PostWrap>
                           
                    ))}
                  
                </PostContainer>
                
            </RowWrap>
    
        </>
    )
}

export default Card
