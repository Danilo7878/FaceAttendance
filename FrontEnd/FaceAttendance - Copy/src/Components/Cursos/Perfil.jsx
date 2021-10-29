import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import {Box, Divider} from '@mui/material';
//import * as actionType from '../../constants/actionTypes';
import { useHistory, Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useStyles from './style';
import './perfil.css'

const Perfil = () => {
    const [curso, setCurso] = React.useState([{}])
    const [cate, setCate] = React.useState("")

    const classes = useStyles();
    var cursos = [{
        "_id": "21561212",
        "catedratico": "Ingeniero Guillermo Zepeda ",
        "curso": "Tecnologias emergentes SEC 1",
        "hora": "Martes y Jueves 17:30 - 19:00",
        "clases": [
            {
                "numero": "1",
                "Tema": "Realidad virtual",
                "Fecha": "01/01/2021",
                "Asistencia": [
                    {
                        "carne": "123456",
                        "nombre": "Juan Perez",
                        "hora": "12:12",
                        "imagenURL": "http://misimagenesde.com/wp-content/uploads/2017/05/foto-de-perfil-11.jpg"
                    },
                    {
                        "carne": "234567",
                        "nombre": "Juana Perez",
                        "hora": "12:12",
                        "imagenURL": "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40"
                    }
                ]
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
        "curso": "Analisis y diseno I SEC 1",
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
        "curso": "Programacion Avanzada SEC 2",
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

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = () => {

        setCate(cursos[0].catedratico)
        setCurso(cursos)
        console.log(cursos[0].clases[0].Tema)
    }

    const [noticia, setNoticia] = React.useState([])

    /*const obtenerDatos = async () => {
        const data = await fetch(`newsapi.org/v2/top-headlines?country=mx&apiKey=6204627390254ac2931b073251803604/${title}`)
        const scsNew = await data.json()
        setNoticia(scsNew)
    }*/

    return (
        <div className="front-con-cuenta" >
            <Grid className="perfil-css" border= "1px solid grey">
                <Avatar id="av" className={classes.large} src="https://sessionize.com/image/302b-400o400o2-c2-5cfa-4281-b1ab-07aca24f78f4.f4ea7174-a632-4b17-8c1f-92721f5f6ed5.jpg"></Avatar>
                <Typography
                    variant="h4"
                    align="center"
                >
                    {cursos[0].catedratico}
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                >
                    {cursos[0]._id}
                </Typography>

                <Box sx={{ width: '100%', maxWidth: 360, border: '1px solid', borderColor: 'grey.500'}}>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    Toothbrush
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                    $4.50
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="text.secondary" variant="body2">
                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                            just down the hall.
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button>Add to cart</Button>
                    </Box>
                </Box>

                <Link to="/addNews">
                    <button className="btn btn-add">Agregar noticia</button>
                </Link><br /><br />

                <Button variant="contained" className={classes.logout} color="secondary">Salir</Button>

            </Grid>
        </div>

    )
}

export default Perfil
