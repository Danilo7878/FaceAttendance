import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'

import Foto from '../../Media/icono.png'

function Cards() {
    return (
        <a name="sec">
            <div className="cards">
                <h1>Colaboradores de FaceAttendance</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem className="card-back"
                                src= {Foto}
                                text="Walter Orozco"
                            />
                           
                            <CardItem className="card-back"
                                src= {Foto}
                                text="Luis Roldan"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem className="card-back"
                                src= {Foto}
                                text="Danilo Sandoval"
                            />
                           
                            <CardItem className="card-back"
                                src= {Foto}
                                text="Andoni Zamora"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
}
export default Cards
