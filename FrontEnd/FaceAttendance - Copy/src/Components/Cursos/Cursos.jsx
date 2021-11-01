import React from 'react'
import './News.css'
import { AppBar, Grid, Typography } from '@material-ui/core';
import Footer from '../Home/Footer'

import Accordion from './Accordion';
import { useParams } from 'react-router';

const News = (props) => {
    const [curso, setCurso] = React.useState([])
    const [cate, setCate] = React.useState("")
    var cursos;
    const {id} = useParams();
    React.useEffect(() => {
        obtenerDatos()
    }, [])


    const obtenerDatos = () => {
        //aca se debe de consultar nuevamente a la base de datos para que se actualize cada vez que llegue una nueva entrada. 
        cursos = [{
            "_id": "123",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Tecnologias emergentes ",
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

        //console.log(id)
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
                    {
                        curso.map(item => (
                            <Accordion
                                title={item.curso}
                                content = {item.clases.map(teme => (teme.Tema + "</br>"))}
                            />
                        ))
                        
                    }
                </Grid>
            </Grid>
            <Footer />
        </div >

    )
}

export default News;