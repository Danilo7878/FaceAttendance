import React from 'react'
import './News.css'
import { AppBar, Grid, Typography } from '@material-ui/core';
import Footer from '../Home/Footer'
import '../Cursos/cursos.css';
import Accordion from './Accordion';
import { useParams } from 'react-router';
import axios from "axios";

const News = (props) => {
    const [curso, setCurso] = React.useState([])
    const [cate, setCate] = React.useState("")
    const [listCursos, setListcursos] = React.useState([])

    var cursos = [{
        "_id": "500c169afcdd656e",
        "catedratico": "Ingeniero Guillermo Zepeda ",
        "carne":"1321612",
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
        "_id": "22dab1257dc6471b",
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
        "_id": "39c2c83b1267b58b",
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

    const { id } = useParams();

    React.useEffect(() => {
        obtenerDatos()
    }, [])


    const obtenerDatos = () => {
        //aca se debe de consultar nuevamente a la base de datos para que se actualize cada vez que llegue una nueva entrada. 
        /*cursos = [{
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
/*/
        //console.log(id)
        setCate(cursos[0].catedratico)
        setCurso(cursos)
    }

    const clases = [
        {
            "_id": "123",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Tecnologias emergentes ",
            "hora": "Martes y Jueves 17:30 - 19:00",
            "clases": [{
                "numero": "1",
                "Tema": "Realidad virtual",
                "Fecha": "01/01/2021",
                "Asistencia": [{
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
        },
        {
            "_id": "124",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Analisis y diseno I",
            "hora": "Lunes y Miercoles 19:30 - 21:00",
            "clases": [{
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
        },
        {
            "_id": "125",
            "catedratico": "Ingeniero Guillermo Zepeda ",
            "curso": "Programacion Avanzada ",
            "hora": "Martes y Jueves 07:00 - 08:30",
            "clases": [{
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
        }
    ];


    var leerId = () => {
        return document.getElementById("claseId").value;
    }

    var cargarClasePorId = (claseId) => {
        return clases.filter((clase) => {
            return clase._id == claseId;
        })
    };

    var cargarDatos = (button) => {
        var claseId = leerId();
        var datosClase = cargarClasePorId(claseId).pop();

        console.log(claseId, datosClase)

        mostrarDatos(datosClase);
    }

    var mostrarDatos = (claseDatos) => {
        document.getElementById("claseDatos").innerHTML = JSON.stringify(claseDatos);
        document.getElementById("catedratico").innerHTML = JSON.stringify(claseDatos.catedratico);
        document.getElementById("clases").innerHTML = JSON.stringify(claseDatos.clases);
        claseDatos.clases.forEach((clase) => {
            console.log(clase, clase.numero, clase.Tema, clase.Fecha, clase.Asistencia)
        })
    }

    let url = 'http://localhost:8080/GetList/15-11-2021';

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i = 0; i<data.length; i++){
            body += `<tr><td>${data[i].nombre}</td><td>${data[i].hora}</td><td>${data[i].imagen}</td></tr>`                
        }
        document.getElementById('data').innerHTML = body
    } 



    /*const obtenerDatos = async () => {
        const data = await fetch('http://newsapi.org/v2/top-headlines?country=mx&apiKey=6204627390254ac2931b073251803604')
        //const data = await fetch("http://localhost:3001/articles")
        const scsNew = await data.json()
        setNoticia(scsNew.articles)
    }*/
    return (

        <div className="todo" >
            <div className="contenido">
                <br />
                Fecha: <input type="date" id="claseId" /><button onClick="cargarDatos(this)">CARGAR DATOS</button>
                <br />
                <h4>Participantes:</h4>
                <br />
                <div className="claseDatos">
                    <table className="table" >
                        <thead>
                            <tr>
                            <th>Nombre</th>
                            <th>Hora</th>
                            <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody id="data">
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h4>Catedratico:</h4> 
                <span id="catedratico"> Ingeniero Guillermo Zepeda.</span>
                <br />
                <br />
                <h4>Clase:</h4>
                <span id="clase"> Tecnologias emergentes SEC 1</span>
            </div>
            <div className="pie">
                <Footer />
            </div>
        
        </div >

    )
}

export default News;

/*
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
            <Footer /> */
