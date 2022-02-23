import React, { useState, useEffect } from 'react';
import {
    BannerButton,
    BannerContents,
    BannerTitle,
    ButtonsWrap,
    Header,
    BannerDescription,
    FadeBottom,
    FadeBanner,
    FadeTop,
} from './styled';
import {useHistory} from "react-router-dom"
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import axios from '../../services/axios';
import requests from '../../services/requests';

function Banner() {
    const [movie, setMovie] = useState([]);
    const history = useHistory();
    useEffect(() => {
        async function requestData() {
            const response = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );

            return response;
        }

        requestData();
    }, []);

    const truncate = (string, n) => {
        return string?.length > 100 ? string.substr(0, n - 1) + ' ...' : string;
    };
    return (
        <>
            <FadeTop />
            <Header
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                    backgroundPosition: 'center center',
                }}
            >
                <BannerContents>
                    <BannerTitle>
                        {movie?.name || movie?.title || movie?.original_name}
                    </BannerTitle>

                    <BannerDescription tru>
                        {truncate(movie?.overview, 150)}
                    </BannerDescription>
                    <ButtonsWrap>
                        <BannerButton flex={1} color="true" onClick={()=> history.push("/play")}>
                            <BsPlayFill
                                style={{
                                    marginRight: '04px',
                                    alignItems: 'center',
                                }}
                            />
                            Assistir
                        </BannerButton>
                        <BannerButton flex={1} >
                            <AiOutlineInfoCircle
                                style={{
                                    marginRight: '04px',
                                    alignItems: 'center',
                                }}
                            />
                            Mais Informações
                        </BannerButton>
                    </ButtonsWrap>
                </BannerContents>
                <FadeBottom />
            </Header>
        </>
    );
}

export default Banner;
