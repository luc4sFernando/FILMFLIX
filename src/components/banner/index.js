/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState, useEffect } from 'react';
import { BannerButton, BannerContents, BannerTitle, ButtonsWrap, Header, BannerDescription, FadeBottom  } from './styled';
import {BsPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import axios from '../../services/axios'
import requests from '../../services/requests';


function Banner() {

    const [movie, setMovie] = useState([]);

  useEffect(() => {
      async function requestData(){
         const response = await axios.get(requests.fetchNetflixOriginals);

         setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
         
         return response;
      }
      
      requestData()
  }, [])

    
    const truncate = (string, n) => {
        return string?.length > 100 ? string.substr(0, n - 1) + ' ...' : string
    };
    return (
        <>
        
            <Header style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }
            }>
                <BannerContents>
                    <BannerTitle>
                        {movie?.name || movie?.title || movie?.original_name}
                    </BannerTitle>
                    <ButtonsWrap>
                        <BannerButton flex={1}>
                         
                          <BsPlayFill style={{marginRight: '04px', alignItems: 'center'}} /> 
                        Assistir
                          
                        </BannerButton>
                        <BannerButton flex={1} >
                        <AiOutlineInfoCircle  style={{marginRight: '04px', alignItems: 'center'}}/>Mais Informações
                        </BannerButton>
                    </ButtonsWrap>
                    <BannerDescription tru>{truncate(movie?.overview, 150)}</BannerDescription>
                </BannerContents>
                <FadeBottom></FadeBottom>
            </Header>

        </>
    )
}

export default Banner
