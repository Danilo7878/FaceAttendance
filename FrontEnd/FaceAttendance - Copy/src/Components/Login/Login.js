import React from 'react';
import loginImg from '../../Media/icono.png'
import './Login.css'
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Login
                    <div className="image">
                        <img src={loginImg} className="dim-img"/>
                    </div>
                </div> 
                
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                <Link to="/cursos"><button type="button" className="btn-login">Login</button></Link>
                </div>
            </div>
        )
    }
    
}

export default Login;