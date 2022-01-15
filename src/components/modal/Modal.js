import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import './style.css';

function Modal({ filmInfo, setModal }) {
    const { backdrop_path, name, overview } = filmInfo;
    console.log(backdrop_path);
    console.log(window.scrollY);
    return (
        <div
            className="background"
            style={{ position: 'absolute', top: window.scrollY }}
        >
            <div className="modal_container">
                <div className="modal_content">
                    <AiOutlineCloseCircle
                        onClick={() => setModal(false)}
                        size="30px"
                    />
                    <img
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt={name}
                    />
                    <div className="modal_gradient" />
                    <div className="modal_info">
                        <h2>{name}</h2>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
