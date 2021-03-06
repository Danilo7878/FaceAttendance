import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <a name="barra">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        FaceAttendance <i className="fas fa-user-check"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobilMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                                <a href="#sec" className="nav-links" onClick={closeMobilMenu}>
                                    Colaboradores
                                </a>
                        </li>
                        <li className="nav-item">
                            <a href="#nosotros" className="nav-links" onClick={closeMobilMenu}>
                                Sobre nosotros
                            </a>
                        </li>
                        <li className="nav-item-login">
                            <Link to="/login" className="nav-links" onClick={closeMobilMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </a>
    )
}

/*{button && 
                        <Link to="/signup" onClick={closeMobilMenu}>
                            <Button buttonStyle='btn--outline'>Sign Up</Button>
                        </Link>
                    }
*/

export default Navbar
