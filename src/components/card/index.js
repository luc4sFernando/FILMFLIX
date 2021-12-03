import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { setPost } from '../../features/counter/stockSlice';
import { fetchMovies, fetchVideo } from '../../services/api';
import { useDispatch } from 'react-redux';
import { RowWrap, H2, ImgPost, PostWrap, PostContainer } from './style';
import { VscChevronRight } from 'react-icons/vsc';

import './style.css';
// eslint-disable-next-line react/prop-types
function Card({ title, fetchUrl }) {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const [control, setControl] = useState(false);
  const [position, setPosition] = useState(null);
  const container = useRef(null);
  const controller = useRef(null);

  useEffect(() => {
    async function getDataMovieApi() {
      const movies = await fetchMovies(fetchUrl);

      const videos = await Promise.all(
        movies.map((item) => fetchVideo(item.id)),
        setMovie(movies)
      );

      movies.map((movie, index) => {
        if (videos[index].length > 0) {
          movie.trailer = videos[index];
        }
        return videos;
      });

      dispatch(setPost(movies));
    }
    getDataMovieApi();
  }, [fetchUrl]);

  function scrollNext() {
    console.log(container.current.offsetWidth);
    container.current.scrollLeft += container.current.offsetWidth;
  }
  function scrollPrev() {
    console.log(container.current.offsetWidth);
    container.current.scrollLeft -= container.current.offsetWidth;
  }

  function activeControlPrev() {
    controller.current.className += ' active';
  }
  function disableControl() {
    controller.current.className = ' post_controler';
  }
  function handleControls() {
    setControl(true);
  }
  function offControl() {
    setControl(false);
  }

  return (
    <>
      <RowWrap onMouseOver={handleControls} onMouseLeave={offControl}>
        <H2>{title}</H2>
        <PostContainer ref={container}>
          {movie.map(
            (movie) =>
              (movie.poster_path || movie.backdrop_path) && (
                <PostWrap key={movie.id} onMouseEnter={e => setPosition(e.target.getBoundingClientRect())}>
                  <ImgPost
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.name}
                    id={movie.id}
                  />
                </PostWrap>
              )
          )}
        </PostContainer>

        {control && (
          <>
            <VscChevronRight
              size='60px'
              className='post_controler_l'
              onClick={scrollPrev}
            />
            <VscChevronRight
              size='60px'
              className='post_controler_r'
              onClick={scrollNext}
            />
          </>
        )}
      </RowWrap>
    </>
  );
}

export default Card;
