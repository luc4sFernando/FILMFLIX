import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Buttons from "../butons/Buttons"
import Genres from '../genres';
import './style.css';


function Modal({ filmInfo, setModal }) {

    const { backdrop_path, name, overview, original_name, release_date, title, genre_ids } = filmInfo;

  
   
    return (
        <div
            className="background"
            style={{ position: 'absolute', top: window.scrollY }}
        >
            <div className="modal_container">
            <div className="modal_gradient" />
                <div className="modal_content">
                    <AiOutlineCloseCircle
                        onClick={() => setModal(false)}
                        size="30px"
                    />
                    <img
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt={name}
                    />
                   
            
                    <div className="modal_info">
                    <Buttons>
                    Play
                    </Buttons>
                        <h2>{title || name || original_name}</h2>
                        <p>{overview}</p>
                        <hr style={{marginTop: "30px"}}/>
                        <h2 style={{marginTop: "20px"}}> Info</h2>
                        <div className="infos">

                        <span>Release data</span>
                        <p>{release_date}</p>
                        <span>Genres</span>
                        <Genres genre={genre_ids}/>
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
