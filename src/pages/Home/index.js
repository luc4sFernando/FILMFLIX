import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Banner from '../../components/banner';
import FilteredCard from '../../components/filteredCard';
import Menu from '../../components/nav/Menu';
import Row from '../../components/row';
import { filmsSelector, textSelector } from '../../features/selectors';
import { useResponsiveComponent } from '../../hooks/useResponsiveComponent';

import './style.scss';
function Home() {
    const queryFilm = useSelector(textSelector);
    const films = useSelector(filmsSelector);
    const [filteredFilms, setFilteredFilms] = useState(null);

    function filter(films, query) {
        return films.filter((film) => film.title.toLowerCase().includes(query));
    }
    useEffect(() => {
        const filtered = filter(films, queryFilm);
        setFilteredFilms(filtered);
        console.log(filtered);
    }, [queryFilm]);
    const mediaQuery = useResponsiveComponent();
    return (
        <div className="fundo">
            {(mediaQuery > 579 && <Menu type="Home" />) || (
                <Menu type="Mobile" />
            )}
            {!queryFilm && (
                <>
                    <Banner />
                    <Row />
                </>
            )}

            {queryFilm && (
                <>
                    <FilteredCard>{filteredFilms}</FilteredCard>
                </>
            )}
        </div>
    );
}

export default Home;
