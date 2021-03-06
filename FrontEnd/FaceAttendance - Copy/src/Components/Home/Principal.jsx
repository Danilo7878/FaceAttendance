import React from 'react';
import '../../App.css'
import './Home.css';
import { Link } from "react-router-dom";
//<video src='../../Media/home-video.mp4' autoPlay loop muted />
const Principal = () => {
    return(
        <a name="inicio">
            <div className='hero-container' >
                <h1>FACE ATTENDANCE</h1>
                <p>Asistencia rápida, automática y segura</p>
                <div className='hero-btns'>
                    <Link to="/signup">
                        <button className='btns'>
                            EMPEZAR
                        </button>
                    </Link>
                </div>
            </div>
        </a>
    )
}

export default Principal;