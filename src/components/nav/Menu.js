import React, { useEffect, useState } from 'react';
import { NavigatorLink, Preferences } from './NavigatorLink';
import { Container, NavigatorList } from './stylemenu';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setText } from '../../features/counter/localSlice';

function Menu({ type }) {
    const [show, handleShow] = useState(false);
    const [searchIcon, setSearchIcon] = useState(false);
    const [val, setVal] = useState('');
    const dispatch = useDispatch();

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
    function closeSearchInput() {
        setSearchIcon(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        };
    }, []);

    useEffect(() => {
        searchIcon && window.addEventListener('click', closeSearchInput);
        return () => {
            window.removeEventListener('click', closeSearchInput);
        };
    }, [searchIcon]);

    return (
        <Container color={show}>
            <NavigatorList>
                <NavigatorLink type={type} icon="/FILMFLIX.png" />
                <NavigatorLink>Start</NavigatorLink>
                <NavigatorLink>Series</NavigatorLink>
                <NavigatorLink>Films</NavigatorLink>
            </NavigatorList>

            <div id="container-controls">
                <div className={searchIcon ? 'active' : 'form'}>
                    <AiOutlineSearch
                        color="white"
                        onClick={handleSearchInput}
                    />
                    <input
                        type="text"
                        className={searchIcon ? 'activet' : 'form'}
                        value={val}
                        onChange={(e) => {
                            setVal(e.target.value);
                            dispatch(setText(e.target.value));
                        }}
                    />
                </div>
                <Preferences type={type} />
            </div>
        </Container>
    );
}

export default Menu;
