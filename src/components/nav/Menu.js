import React, { useEffect, useState } from 'react';
import { NavigatorLink, Preferences } from './NavigatorLink';
import { Container, NavigatorList } from './stylemenu';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setText } from '../../features/counter/localSlice';
import {useSelector} from "react-redux"
import {textSelector} from "../../features/selectors/index"
function Menu({ type }) {
  const [show, handleShow] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const [val, setVal] = useState('');
  const dispatch = useDispatch();
  const text = useSelector(textSelector);
  console.log(text);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  function handleSearchInput() {
    setSearchIcon((prev) => !prev);
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);
  useEffect(() => {
    dispatch(setText(val))
  }, [val]);

  
  return (
    <Container color={show}>
      <NavigatorList>
        <NavigatorLink type={type} icon='/FILMFLIX.png' />
        <NavigatorLink>Start</NavigatorLink>
        <NavigatorLink>Series</NavigatorLink>
        <NavigatorLink>Films</NavigatorLink>
      </NavigatorList>

      <div id='container-controls'>
        <div id='form'>
          <AiOutlineSearch
            color='white'
            style={{ cursor: 'pointer' }}
            onClick={handleSearchInput}
          />
          <input
            type='text'
            style={searchIcon ? { width: '200px' } : { width: '0px' }}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
        </div>
        <Preferences type={type} />
      </div>
    </Container>
  );
}

export default Menu;
