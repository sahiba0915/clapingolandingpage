import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import web from "../images/ClapingoLogo.png";
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();   

    const navigateToLogin = () => {
        navigate('/login');
      };
    return (
        <>
        <div className='container-fluid header' >
            <div className='row'>
                <div class="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ml">
                <div className="container-fluid">
                    <img  src = {web} className="navbar-brand" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="#">Plans & Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Teach with us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Affiliate Program</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Kids</NavLink>
                            </li>
                            
                        </ul>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <button className="btn-login" type="submit" onClick={navigateToLogin}>
                        <FontAwesomeIcon icon={faUser} /> Login</button>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar