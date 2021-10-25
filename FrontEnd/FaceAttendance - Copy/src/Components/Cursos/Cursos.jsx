import React from 'react'
import { Fragment } from 'react';
import './News.css'
import { AppBar, Grid, List, ListItem, ListItemText, Paper, Typography, Button } from '@material-ui/core';
import Footer from '../Home/Footer'
import CardItem from "../Home/CardItem";
import Foto from '../../Media/icono.png'
//import ListItemButton from '@mui/material';
import { Link } from "react-router-dom";

const News = () => {
    const [curso, setCurso] = React.useState([])
    const [cate, setCate] = React.useState("")
    const [attend, setAttend] = React.useState([])
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const handleClick = () => {
        setOpen(!open);
    };

    const obtenerDatos = () => {
        var cursos = [{
            "_id": "123",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Tecnologias emergentes ",
            "hora": "Martes y Jueves 17:30 - 19:00",
            "clases": [
                {
                    "numero": "1",
                    "Tema": "Realidad virtual",
                    "Fecha": "01/01/2021",
                    "Asistencia": []
                },
                {
                    "numero": "2",
                    "Tema": "Realidad aumentada",
                    "Fecha": "09/01/2021",
                    "Asistencia": []
                }
            ]
        }, {
            "_id": "124",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Analisis y diseno I",
            "hora": "Lunes y Miercoles 19:30 - 21:00",
            "clases": [
                {
                    "numero": "1",
                    "Tema": "Scrum Básico",
                    "Fecha": "02/01/2021",
                    "Asistencia": []
                },
                {
                    "numero": "2",
                    "Tema": "Business Analysis",
                    "Fecha": "10/01/2021",
                    "Asistencia": []
                }
            ]
        }, {
            "_id": "125",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Programacion Avanzada ",
            "hora": "Martes y Jueves 07:00 - 08:30",
            "clases": [
                {
                    "numero": "1",
                    "Tema": "Matrices",
                    "Fecha": "03/01/2021",
                    "Asistencia": []
                },
                {
                    "numero": "2",
                    "Tema": "Recursividad",
                    "Fecha": "11/01/2021",
                    "Asistencia": []
                }
            ]
        }]

        setCate(cursos[0].catedratico)
        setCurso(cursos)
    }

    /*const obtenerDatos = async () => {
        const data = await fetch('http://newsapi.org/v2/top-headlines?country=mx&apiKey=6204627390254ac2931b073251803604')
        //const data = await fetch("http://localhost:3001/articles")
        const scsNew = await data.json()
        setNoticia(scsNew.articles)
    }*/
    return (

        <div className="todo">

            <AppBar position="static" color="inherit" className="catedratico">
                <Typography
                    variant="h4"
                    align="center" className="tipo">
                    {cate}
                </Typography>
            </AppBar>

            <Grid container spacing={12}>

                <Grid item xs={4} className="tarjetas">
                    <Paper className="paper">
                        <List component="nav">
                            {
                                curso.map(item => (
                                    <Fragment key={item._id} className="carta">
                                        <Button key={item._id} onClick={handleClick}>
                                            <ListItemText primary={item.curso} />
                                            {open ? "▲" : "▼"}
                                        </Button>
                                    </Fragment>
                                ))
                            }
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={6} className="tituloClase">
                    <Typography
                        variant="h4"
                        align="center">                        
                        Tecnologías Emergentes - dd/mm - Realidad virtual
                    </Typography>
                </Grid>

                <Grid item xs={4} className="vacio">
                </Grid>

                <Grid item xs={6} className="asistencia">
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
                </Grid>
            </Grid>
            <Footer />
        </div >
        
    )
}

export default News;