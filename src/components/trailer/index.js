import './style.scss';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const PlayAnimation = () => {
  const audio = new Audio('/tadum.mp3');
  console.log(audio);
  let history = useHistory();
  const soundRef = useRef(null);
  const handleTadum = () => {
    // soundRef.current.currentTime = 0;
    // soundRef.current.play();
    audio.play();
  };

  useEffect(() => {
    handleTadum();
    setTimeout(() => {
      history.push('/browse');
    }, 4200);
  }, [history]);

  return (
    <div className='PlayAnimation__wrp'>
      <span className='PlayAnimation__text'>FILMFLIX</span>
    </div>
  );
};

export default PlayAnimation;
