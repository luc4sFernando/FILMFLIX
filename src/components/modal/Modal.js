import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsFillPlayFill} from "react-icons/bs"
import Buttons from "../butons/Buttons"
import './style.css';
import instance from "../../services/axios"

function Modal({ filmInfo, setModal }) {
    const { backdrop_path, name, overview, original_name, release_date } = filmInfo;
    console.log(filmInfo);
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
                    <Buttons>
                    Play
                    </Buttons>
                        <h2>{original_name || name}</h2>
                        <p>{overview}</p>
                        <hr style={{marginTop: "20px"}}/>
                        <div className="infos">

                        <span>Release data</span>
                        <p>{release_date}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
