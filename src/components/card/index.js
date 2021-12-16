import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { setPost } from '../../features/counter/stockSlice';
import { fetchMovies, fetchVideo } from '../../services/api';
import { useDispatch } from 'react-redux';
import { RowWrap, H2, ImgPost, PostWrap, PostContainer, CardOptions } from './style';
import { VscChevronRight } from 'react-icons/vsc';
import { AiFillPlayCircle } from 'react-icons/ai';
import {BsPlusCircle} from 'react-icons/bs'
import './style.css';
import Modal from '../modal/Modal';
import { useDisabledBodyScroll } from '../../hooks/useDisableBodyScroll';
// eslint-disable-next-line react/prop-types
function Card({ title, fetchUrl }) {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const container = useRef(null);
  const controller = useRef(null);
  const [control, setControl] = useState(false);
  const [modal, setModal] = useState(false);
  const [movieFilm, setMovieFilm] = useState({});
  const [offset, setoffset] = useState(0);
  useDisabledBodyScroll(modal);
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
    console.log(container.current.scrollLeft);
    container.current.scrollLeft += Math.floor(
      container.current.offsetWidth + 110
    );
    setoffset((prev) => (prev += 1));
    console.log(offset);
  }
  function scrollPrev() {
    container.current.scrollLeft -= Math.floor(
      container.current.offsetWidth + 110
    );
    setoffset((prev) => (prev -= 1));
  }

  function activeControlPrev() {
    controller.current.className += ' active';
  }

  return (
    <>
      {modal && <Modal filmInfo={movieFilm} setModal={setModal} />}
      <RowWrap
        onMouseOver={() => setControl(true)}
        onMouseLeave={() => setControl(false)}
      >
        <H2>{title}</H2>
        <PostContainer ref={container}>
          {movie.map(
            (movie) =>
              (movie.poster_path || movie.backdrop_path) && (
                <PostWrap key={movie.id}>
                  <ImgPost
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.name}
                    id={movie.id}
                  />
                  <CardOptions onClick={(e) => {
                     setMovieFilm(movie);
                    setModal(true)}}>
                  <AiFillPlayCircle size="30px" style={{cursor: "pointer"}}/>
                  <BsPlusCircle size="30px" style={{cursor: "pointer"}}/>
                  </CardOptions>
                </PostWrap>
              )
          )}
        </PostContainer>

        {control && (
          <>
            {offset > 0 && (
              <div className='post_controler_l'>
                <VscChevronRight size='40px' onClick={scrollPrev} />
              </div>
            )}

            <div className='post_controler_r'>
              <VscChevronRight size='40px' onClick={scrollNext} />
            </div>
          </>
        )}
      </RowWrap>
    </>
  );
}

export default Card;
