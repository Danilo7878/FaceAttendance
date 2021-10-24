import React from 'react'
import './Home.css'

const About = () => {
    return (
        <a name ="nosotros">
            <div className="about-component">
                <h1 className="titulo">
                    Acerca de FaceAttendance 
                </h1>
                <h2 className="subtitulo">
                Sobre el reconocimiento facial para FaceAttendance
                </h2>
                <p className="parrafo">
                    El reconocimiento facial es una de las aplicaciones de 
                    procesamiento de imágenes más productivas y tiene un papel 
                    fundamental en el campo técnico. El reconocimiento del 
                    rostro humano es un tema activo para fines de autenticación, 
                    específicamente en el contexto de asistencia de los 
                    estudiantes. El sistema de asistencia que utiliza el 
                    reconocimiento facial es un procedimiento para reconocer 
                    a los estudiantes mediante el uso de bioestadísticas 
                    faciales basadas en el monitoreo de alta definición y 
                    otras tecnologías informáticas. El desarrollo de este sistema
                    tiene como objetivo lograr la digitalización del sistema 
                    tradicional de tomar la asistencia llamando nombres y
                    manteniendo registros en papel. Las estrategias actuales
                    para tomar la asistencia son tediosas y requieren mucho
                    tiempo. Los registros de asistencia se pueden manipular
                    fácilmente mediante la grabación manual.
                </p>

                <p className="parrafo">
                El proceso tradicional de hacer asistencia y los sistemas 
                biométricos actuales son vulnerables a los proxies. Por tanto, 
                se propone este artículo para abordar todos estos problemas. 
                El sistema propuesto utiliza clasificadores de Haar, KNN, 
                CNN, SVM, redes generativas adversarias y filtros de Gabor.
                 Después del reconocimiento facial, los informes de asistencia 
                 se generarán y almacenarán en formato Excel. El sistema se 
                 prueba en diversas condiciones como iluminación, movimientos 
                 de la cabeza, variación de la distancia entre el alumno y las 
                 cámaras. Después de pruebas rigurosas, se calculan la complejidad
                y la precisión generales. El sistema Proposed demostró ser un 
                dispositivo eficiente y robusto para tomar la asistencia en un 
                aula sin ningún consumo de tiempo y trabajo manual. El sistema 
                desarrollado es rentable y necesita menos instalación. 
                </p>
            </div>
        </a>
    )
}

export default About
