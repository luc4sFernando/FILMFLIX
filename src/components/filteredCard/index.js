import React from 'react';
import './style.scss';
function FilteredCard({ children }) {
    console.log(children);
    return (
        <div className="list_container">
            {children &&
                children.map((film) => (
                    <>
                        <div className="list_content" key={film.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                                alt={film.name || film.title}
                                id={film.id}
                                className="img_film"
                            />
                        </div>
                    </>
                ))}
        </div>
    );
}

export default FilteredCard;
